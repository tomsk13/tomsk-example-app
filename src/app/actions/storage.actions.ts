import { HasStore, InjectStore } from 'ng-state';
import { Map } from 'immutable';

@InjectStore(['storage'])
export class StorageStateActions extends HasStore<Map<any, any>> {
    add() {
        this.store.storage.save();
    }

    remove() {
        this.store.storage.remove();
    }

    clear() {
        this.store.storage.clear();
    }

    load() {
        this.store.storage.load();
    }

    change() {
        this.store.update((state: Map<any, any>) => {
            state.set('itemToStore', 'changed value');
        });
    }

    get deeperItem() {
        return this.state.get('itemToStore');
    }
}