import { Component, effect, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatButtonToggleGroup, MatButtonToggle, MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatSelectionList, MatListOption } from '@angular/material/list';
import { TodoFilter, TodosStore } from '../../store/todos.store';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [FormsModule, CommonModule, 
    MatFormField, MatInput, MatIcon, MatSuffix, MatButton,
    MatLabel, MatButtonToggleGroup, MatButtonToggle, MatSelectionList, MatListOption

  ],
  templateUrl: './todos-list.html',
  styleUrl: './todos-list.scss',
})
export class TodosListComponent {
  public store = inject(TodosStore);

  filter = viewChild.required(MatButtonToggleGroup);

  constructor() {
    effect(() => {
      const filterValue = this.filter();
      filterValue.value = this.store.filter();
    })
  }
  async onAddTodo(title: string) {
    await this.store.addTodo(title);
    console.log('Todo added:', title);
  }
  async onDeleteTodo(id: string, event: MouseEvent) {
    event.stopPropagation(); // Prevent event from bubbling up
    await this.store.deleteTodo(id);
    console.log('Todo deleted:', id);
  }
  async onToggleTodo(id: string, completed: boolean) {
    await this.store.updateTodo(id, !completed);
    
  }

  onFilterTodo(event: MatButtonToggleChange) {
    const filter = event.value as TodoFilter;
    this.store.setFilter(filter);
  }
}