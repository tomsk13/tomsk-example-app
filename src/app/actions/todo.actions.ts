import { HasStore, InjectStore } from 'ng-state';

import { Store } from 'ng-state';

@InjectStore(['${stateIndex}'])
export class TodoStateActions implements HasStore {

    store: Store<any>;

    get todoDescription() {
        return this.store.map(state => {
           return state.get('description');
        });
    }
}