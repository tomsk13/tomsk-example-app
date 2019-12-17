import { HasStore, InjectStore } from '@ng-state/store';
import { TodoModel } from './todo.model';

@InjectStore(['list','${stateIndex}'])
export class TodoStateActions extends HasStore<TodoModel> {
    get todoDescription() {
        return this.state.description;
    }
}