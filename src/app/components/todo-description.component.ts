import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ComponentState } from 'ng-state';
import { TodoStateActions } from '../actions/todo.actions';

@ComponentState(TodoStateActions)
@Component({
  selector: 'todo-description',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div>{{ actions.todoDescription }}</div>`
})
export class TodoDescription {
  actions: TodoStateActions;
  statePath: any;
}