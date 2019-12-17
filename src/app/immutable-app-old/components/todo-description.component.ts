import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';

import { ComponentState, HasStateActions } from '@ng-state/store';
import { TodoStateActions } from '../actions/todo.actions';

@ComponentState(TodoStateActions)
@Component({
  selector: 'todo-description',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div>{{ actions.todoDescription }}</div>`
})
export class TodoDescription extends HasStateActions<TodoStateActions> {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }
}