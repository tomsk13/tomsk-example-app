import { RouterHistoryTestComponent } from './components/router-history-test.component';
import { Routes } from '@angular/router';
import { TodosComponent } from './components/todos.component';
import { ProductsComponent } from './products/products.component';
import { StorageTestComponent } from './components/storage-test.component';

export const routes: Routes = [
    {
        path: '',
        component: TodosComponent
    },
    {
        path: 'forms',
        component: ProductsComponent
    },
    {
        path: 'storage',
        component: StorageTestComponent
    },
    {
        path: 'router-history-test',
        component: RouterHistoryTestComponent
    }
];
