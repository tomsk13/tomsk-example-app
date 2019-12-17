import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { TodoModel } from './../actions/todo.model';
import { TodosSelectors } from './../actions/todos.actions';
import { todoService } from '../service';

@Component({
    selector: 'todos',
    templateUrl: './todos.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {

    model = {
        name: '',
        description: ''
    };

    constructor(private todoSvc: todoService, public selector:TodosSelectors) {

    }
    
    ngOnInit(){
        this.todoSvc.loadTodos();
    }

    deleteItem(index: number) {
        this.todoSvc.deleteTodo(index);
    }

    addItem() {
        this.todoSvc.addTodo({ name: this.model.name, description: this.model.description } as TodoModel);
        this.model.name = '';
        this.model.description = '';
    }

    trackById(item: TodoModel) {
        return item.id;
    }
}