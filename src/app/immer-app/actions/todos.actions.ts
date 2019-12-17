import { HasStore, InjectStore, Dispatcher, Message, Store, PersistStateItem, PersistStateManager, PersistStateParams } from '@ng-state/store';
import { TodoModel, TodoStore } from './todo.model';
import { Injectable, OnDestroy } from '@angular/core';
import { timer, Observable, noop, Subscription } from 'rxjs';
import { tap, map, switchMap, take } from 'rxjs/operators';


@Injectable({providedIn:'root'})
export class TodosSelectors{
    store:Store<TodoStore>;
    constructor(private storeRoot:Store<any>) {
        this.store = this.storeRoot.select(['todos']);
    }

    get(variableName:string){
        return this.store.map(state => state[variableName]);
    }

    get isBusy() : Observable<boolean>{
        return this.store.map(state => state.isBusy);
    }

    get isInit() : Observable<boolean> {
        return this.store.map(state => state.isInit);
    }

    get todos() : Observable<TodoModel[]> {
        let tt = this.isInit.pipe(
            //tap(x => x ?  : noop),
            switchMap(_ => this.store.map(state => state.list))
        );
        return tt;
    }

    get todosCount() {
        return this.store.map(state => state.list.length);
    }

}

@Injectable({providedIn:'root'})
export class TodosActions implements OnDestroy {

    store:Store<TodoStore>;
    persistSubscription:Subscription;
    
    constructor(private storeRoot:Store<any>) {
        this.store = this.storeRoot.select(['todos']);
        //this.store
        this.persistSubscription = this.store.subscribe(state => {
            if(state.isInit){
                this.store.storage.save(TodoStore.persistParams)
                    .pipe(tap(_ => console.log("items saved ")))
                    .subscribe();
            }
        });
    }

    ngOnDestroy() {
        if (this.persistSubscription) { this.persistSubscription.unsubscribe(); }
    }

    tagState(tag:string):void{
        this.store.optimisticUpdates.tagCurrentState(tag);
    }

    revertToTag(tag:string):void{
        this.store.optimisticUpdates.revertToTag(tag);
    }

    loadLocal():Observable<PersistStateItem>{
        return this.store.storage.load(TodoStore.persistParams,true);
    }

    saveLocal(){
        
    }

    setBusy(isBusy: boolean = true) {
        this.store.update(state => {
            state.isBusy = isBusy;
        });
    }

    initToDos(list: TodoModel[]) {
        this.store.update(state => {
            state.list = list;
            state.isInit = true;
        }, { message: 'ITEMS LOADED' });
    }

    addTodo(item: TodoModel) {
        this.store.update(state => {
            state.list.push(item);
        }, { message: 'ITEM ADDED' });
    }

    deleteTodo(index: number) {
        this.store.update(state => {
            if (index > -1) {
                state.list.splice(index, 1);
            }

            // delete state[index]; 
        });
    }

    clearTodos() {
        this.store.reset();
    }

    updateFirstItem() {
        this.store.update(state => {
            if (state.list && state.list.length > 0) {
                state.list[0].description = 'updated';
            }
        });
    }

    
}