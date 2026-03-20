import { Todo } from './todo.model';

export const TODOS: Todo[] = [
    { id: '1', title: 'Learn Angular', date: new Date(), completed: false },
    { id: '2', title: 'Build a Todo App', date: new Date(), completed: true },  
    { id: '3', title: 'Write Unit Tests', date: new Date(), completed: false },
    { id: '4', title: 'Deploy to Production', date: new Date(), completed: false },
    { id: '5', title: 'Refactor Codebase', date: new Date(), completed: true },
];