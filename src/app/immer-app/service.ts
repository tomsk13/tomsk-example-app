import { Injectable } from "@angular/core";
import { Store, Dispatcher } from "@ng-state/store";
import { TodoStore, TodoModel } from "./actions/todo.model";
import { expand, map, tap } from "rxjs/operators";
import { timer } from "rxjs";
import { TodosActions } from "./actions/todos.actions";

@Injectable({providedIn:'root'})
export class todoService{

    constructor(private todoActions:TodosActions){
        
    }

    test(){

    }

    loadTodos(): void {
        this.todoActions.setBusy(true);

        timer(4000).pipe(
            map(r => {
                return [
                    { name: 'First To Do', description: 'This is my first ToDo' } as TodoModel,
                    { name: 'Second To Do', description: 'This is my second ToDo' } as TodoModel
                ];
            }),
            tap(r => {
                console.log("yeah ");
                this.todoActions.initToDos(r);
                this.todoActions.setBusy(false);
            })
        ).subscribe(); 
    }

    deleteTodo(index: number) {
        this.todoActions.deleteTodo(index);
    }

    addTodo(todo:TodoModel) {
        this.todoActions.addTodo(todo);
    }
}