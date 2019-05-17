import { HasStore, InjectStore } from '@ng-state/store';
import * as Immutable from 'immutable';
import { TodoModel } from './todo.model';

@InjectStore('todos')
export class TodosStateActions extends HasStore<Immutable.List<any>> {

    addTodo(item: TodoModel) {
        this.store.update(state => {
            state.push(Immutable.fromJS(item));
        }, { message: 'ITEM ADDED' });
    }

    deleteTodo(index: number) {
        this.store.update((state: Immutable.List<any>) => {
            state.delete(index);
        });
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