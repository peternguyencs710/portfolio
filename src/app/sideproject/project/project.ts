import { Component, inject } from '@angular/core';

import { TodosStore } from '../../store/todos.store';
import { JsonPipe } from '@angular/common';
import { TodosListComponent } from '../todos-list/todos-list';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ReactiveFormComponent } from '../reactive-form/reactive-form';

@Component({
  standalone: true,
  selector: 'app-project',
  imports: [TodosListComponent, MatProgressSpinner, ReactiveFormComponent],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class ProjectComponent {

    public store = inject(TodosStore);
    constructor() {}

    ngOnInit() {
        this.loadTodos().then(() => { console.log('Todos loaded'); });  
    }

    async loadTodos() {
        await this.store.loadAll();
    }
}