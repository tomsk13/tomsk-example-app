import { InjectStore, HasStore, Store } from 'ng-state';
import * as Immutable from 'immutable';

@InjectStore('layout')
export class LayoutStateActions implements HasStore {

    store: Store<Immutable.Map<any, any>>;

    toggleSideNav(isOpened) {
        this.store.update((state) => {
            state.set('showSidenav', isOpened);
        });
    }

    get opened() {
        return this.store.map((state) => {
            return state.get('showSidenav');
        });
    }
}