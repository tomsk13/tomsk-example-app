import { Injectable } from "@angular/core";
import { TodoModel } from "./actions/todo.model";
import { map, tap, concatMap, filter, switchMap } from "rxjs/operators";
import { timer, of } from "rxjs";
import { TodosActions } from "./actions/todos.actions";

@Injectable({providedIn:'root'})
export class todoService{

    constructor(private todoActions:TodosActions){
    }
cpt = 0;
    test(){

    }

    loadTodos(): void {
        this.todoActions.setBusy(true);

        this.todoActions.loadLocal().pipe(
            tap(x => {
                if (x.data)
                    this.todoActions.setBusy(false);
            }),
            filter(x => !x.data),//continue if data is null
            switchMap(x => timer(4000)),
            map(r => [
                    { name: 'First To Do', description: 'This is my first ToDo' } as TodoModel,
                    { name: 'Second To Do', description: 'This is my second ToDo' } as TodoModel
                ]),
            tap(r => {
                //console.log("yeah ");
                this.todoActions.initToDos(r);
                this.todoActions.setBusy(false);
            })
        ).subscribe(); 
    }

    deleteTodo(index: number) {
        this.todoActions.deleteTodo(index);
    }

    addTodo(todo:TodoModel) {
        this.cpt++;
        this.todoActions.tagState("test");
        this.todoActions.addTodo(todo);
        timer(5000).pipe(
            tap(_ => {if(this.cpt % 2 == 0) this.todoActions.revertToTag("test");})
        ).subscribe();

    }
}