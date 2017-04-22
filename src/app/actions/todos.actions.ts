import * as Immutable from 'immutable';

import { HasStore, InjectStore } from 'ng-state';

import { Store } from 'ng-state';
import { TodoModel } from './todo.model';

@InjectStore('todos')
export class TodosStateActions implements HasStore {

    store: Store<any>;

    addTodo(item: TodoModel) {
        this.store.update(state => {
            state.push(Immutable.fromJS(item));
        });
    }

    deleteTodo(index: number) {
        this.store.update((state: Immutable.List<any>) => {
            state.delete(index);
        }, false);
    }

    get todos() {
        return this.store.map(state =>
            state.map(item => {
                return {
                    name: item.get('name')
                };
            })
        );
    }
}