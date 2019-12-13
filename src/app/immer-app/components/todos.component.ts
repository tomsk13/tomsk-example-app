import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { TodoModel } from './../actions/todo.model';

import { ComponentState, HasStateActions, Store } from '@ng-state/store';
import { Dispatcher } from '@ng-state/store';
import { Subscription } from 'rxjs';
import { TodosStateActions } from './../actions/todos.actions';
import { todoService } from '../service';

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

    constructor(dispatcher: Dispatcher, cd: ChangeDetectorRef, private storeRef: Store<any>, private myService: todoService) {
        super(cd);
        
        console.log(this.storeRef);
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