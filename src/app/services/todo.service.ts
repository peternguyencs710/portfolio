import { Injectable } from "@angular/core";
import { TODOS } from "../model/mock-data";
import { Todo } from "../model/todo.model";

@Injectable({
    providedIn: "root"
})

export class TodoService {
    async getTodos() {
        // Simulate an API call with a delay    
        await sleep(5000); // Simulate network delay
        return TODOS;  
    }

    async addTodo(todo: Partial<Todo>) :Promise<Todo> {
        await sleep(1000);  
        return {
            id: (Math.random().toString(36).substr(2, 9)), // Generate a random ID
            ...todo
        } as Todo
    }

    async deleteTodo(id: string) {
        await sleep(500);  
        // Simulate deletion logic
    }

    async updateTodo(id: string, completedFlag:boolean) {
        await sleep(500);  
        
    }
}

async function sleep(ms: number) {
    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );
}