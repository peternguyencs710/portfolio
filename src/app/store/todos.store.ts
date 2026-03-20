import { Todo } from '../model/todo.model';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'; 
import { TodoService } from '../services/todo.service';
import { computed, inject } from '@angular/core';
import { State } from '@ngrx/store';

export type TodoFilter = 'all' | 'completed' | 'pending';

type TodoState = {
    todos: Todo[];
    loading: boolean;
    error: string | null;
    filter: TodoFilter;
}

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    filter: 'all',
}

export const TodosStore = signalStore(
    {providedIn: 'root'}, // global store
    withState(initialState),
    withMethods(
        (store, todoService = inject(TodoService))=> ({
            async loadAll() { 
                patchState(store, { loading: true, error: null });
                const todos = await todoService.getTodos();
                patchState(store, { todos, loading: false });
            },
            async addTodo(title:string) {
                const newTodo = await todoService.addTodo({ title, completed: false, date: new Date() });
                patchState(store, (state) => ({
                    todos: [...state.todos, newTodo]
                }));
            },
            async deleteTodo(id: string) {
                await todoService.deleteTodo(id);
                patchState(store, (state) => ({
                    todos: state.todos.filter(todo => todo.id !== id)
                }));
            },
            async updateTodo(id: string, completedFlag:boolean) {
                await todoService.updateTodo(id, completedFlag);
                patchState(store, (state) => ({
                    todos: state.todos.map(todo => 
                        todo.id === id ? { ...todo, completed: completedFlag } : todo
                    )
                }));
            },
            setFilter(filter: TodoFilter) {
                patchState(store, { filter });
            }
        })
    ),
    withComputed((state) => ({
        filteredTodos: computed(() => {
            const todos = state.todos();

            switch(state.filter()) {
                case "all":
                    return todos;
                case "pending":
                    return todos.filter(todo => !todo.completed);
                case "completed":
                    return todos.filter(todo => todo.completed);
            }
        })
    }))

)