import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { TodoModel } from './../actions/todo.model';

import { ComponentState, HasStateActions } from '@ng-state/store';
import { Dispatcher } from '@ng-state/store';
import { Subscription } from 'rxjs';
import { TodosStateActions } from './../actions/todos.actions';

@ComponentState(TodosStateActions)
@Component({
    selector: 'todos',
    templateUrl: './todos.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent extends HasStateActions<TodosStateActions> {

    actions: TodosStateActions;
    model = {
        name: '',
        description: ''
    };

    subscription: Subscription;

    constructor(dispatcher: Dispatcher, cd: ChangeDetectorRef) {
        super(cd);
    }

    deleteItem(index: number) {
        this.actions.deleteTodo(index);
    }

    addItem() {
        this.actions.addTodo({ name: this.model.name, description: this.model.description } as TodoModel);
        this.model.name = '';
        this.model.description = '';
    }

    trackById(item: TodoModel) {
        return item.id;
    }
}