import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ComponentState } from 'ng-state';
import { TodoModel } from './../actions/todo.model';
import { TodosStateActions } from './../actions/todos.actions';

@ComponentState(TodosStateActions)
@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  actions: TodosStateActions;
  model = {
    name: '',
    description: ''
  };

  deleteItem(index: number) {
    this.actions.deleteTodo(index);
  }

  addItem(e: Event) {
    this.actions.addTodo({ name: this.model.name, description: this.model.description } as TodoModel);
    this.model.name = '';
    this.model.description = '';
  }

  trackById(item: TodoModel) {
    return item.id;
  }
}