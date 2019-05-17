import { HasStore, InjectStore } from '@ng-state/store';
import { Map } from 'immutable';

@InjectStore(['${stateIndex}'])
export class TodoStateActions extends HasStore<Map<any, any>> {
    get todoDescription() {
        return this.state.get('description');
    }
}