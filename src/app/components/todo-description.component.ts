import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ComponentState, HasStateActions } from 'ng-state';
import { TodoStateActions } from '../actions/todo.actions';

@ComponentState(TodoStateActions)
@Component({
  selector: 'todo-description',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div>{{ actions.todoDescription | async }}</div>`
})
export class TodoDescription extends HasStateActions<TodoStateActions> {
}