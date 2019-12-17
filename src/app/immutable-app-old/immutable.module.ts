import { AppComponent } from './components/app';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterHistoryTestComponent } from './components/router-history-test.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ng-state/store';
import { TodoDescription } from './components/todo-description.component';
import { TodosComponent } from './components/todos.component';
import { routes } from './routes';
import { StorageTestComponent } from './components/storage-test.component';
import { initialState } from '../initial-state';
import { ImmutableJsDataStrategyModule } from '@ng-state/immutablejs-data-strategy';
import { FiltersComponent } from './components/products/filters/filters.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.provideStore(initialState, false, {
            debugger: {
                enableInitialDebugging: true,
                options: {
                    enableConsoleOutput: false
                }
            },
            history: {
                storeHistoryItems: 50
            }
        }),
        ImmutableJsDataStrategyModule
    ],
    declarations: [
        AppComponent,
        TodosComponent,
        TodoDescription,
        RouterHistoryTestComponent,
        ProductsComponent,
        FiltersComponent,
        StorageTestComponent
    ]
})
export class ImmutableAppModule {
}