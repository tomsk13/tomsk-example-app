import { HasStore, InjectStore } from 'ng-state';

import { Store } from 'ng-state';

@InjectStore(['${stateIndex}'])
export class TodoStateActions implements HasStore {

    store: Store<any>;
    state: any;

    get todoDescription() {
        return this.state.get('description');
    }
}