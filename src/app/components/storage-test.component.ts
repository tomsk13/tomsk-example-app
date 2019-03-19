import { Store, PersistStateManager, ComponentState, HasStateActions } from 'ng-state';
import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { timer } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { StorageStateActions } from '../actions/storage.actions';

@ComponentState(StorageStateActions)
@Component({
    selector: 'storage-test',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
  <div>
    ItemToStore value: {{ actions.deeperItem }} <br /><br />
    <button (click)="add()">add</button>
    <button (click)="remove()">remove</button>
    <button (click)="clear()">clear</button>
    <button (click)="load()">load</button>
    <button (click)="change()">change</button>
  </div>
  `
})
export class StorageTestComponent extends HasStateActions<StorageStateActions>  {

    constructor(cd: ChangeDetectorRef, private store: Store<any>) {
        super(cd);

        PersistStateManager.configureStorage({
            clear: () => timer(2000).pipe(tap(_ => localStorage.clear())),
            getItem: (key: string) => timer(2000).pipe(map(_ => localStorage.getItem(key))),
            removeItem: (key: string) => timer(2000).pipe(tap(_ => localStorage.removeItem(key))),
            setItem: (key: string, value: any) => timer(2000).pipe(tap(_ => localStorage.setItem(key, value))),
        }, () => timer(2000).pipe(map(_ => Object.keys(localStorage))));
    }

    add() {
        this.actions.add();
        this.saveOtherStateToSessionStorage();
    }

    private saveOtherStateToSessionStorage() {
        this.store.select(['todos']).storage.save({ storageConfig: { storage: sessionStorage, getKeys: () => Object.keys(sessionStorage) } });
    }

    remove() {
        this.actions.remove();
    }

    clear() {
        this.actions.clear();
    }

    load() {
        this.actions.load();
    }

    change() {
        this.actions.change();
    }
}