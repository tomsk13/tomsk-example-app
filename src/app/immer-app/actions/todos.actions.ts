import { HasStore, InjectStore, Dispatcher, Message, Store } from '@ng-state/store';
import { TodoModel, TodoStore } from './todo.model';
import { Injectable } from '@angular/core';

//@InjectStore('todos')
@Injectable({providedIn:'root'})
export class TodosSelectors{
    store:Store<TodoStore>;
    constructor(private storeRoot:Store<any>) {
        this.store = this.storeRoot.select(['todos']);
    }

    // get(variableName:string){
    //     return this.store.map(state => state.[variableName]);
    // }

    get isBusy(){
        return this.store.map(state => state.isBusy);
    }

    get isInit() {
        //debugger;
        return this.store.map(state => state.isInit);
    }

    get todos() {
        let tt = this.store.map(state => state.list);
        return tt;
    }

    get todosCount() {
        return this.store.map(state => state.list.length);
    }

}

@Injectable({providedIn:'root'})
export class TodosActions {

    store:Store<TodoStore>;
    constructor(private storeRoot:Store<any>) {
        this.store = this.storeRoot.select(['todos']);
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
        debugger;
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