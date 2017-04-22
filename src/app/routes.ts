import { RouterHistoryTestComponent } from './components/router-history-test.component';
import { Routes } from '@angular/router';
import { TodosComponent } from './components/todos.component';

export const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  },
  {
    path: 'router-history-test',
    component: RouterHistoryTestComponent
  }
];
