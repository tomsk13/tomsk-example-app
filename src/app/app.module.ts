import { AppComponent } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosComponent } from './immer-app/components/todos.component';
import { ProductsComponent } from './immer-app/components/products/products.component';
import { StorageTestComponent } from './immer-app/components/storage-test.component';
import { RouterHistoryTestComponent } from './immer-app/components/router-history-test.component';
import { StoreModule  } from '@ng-state/store';
import { initialState } from './initial-state';
import { ImmerDataStrategyModule } from '@ng-state/immer-data-strategy';
import { TodoDescription } from './immer-app/components/todo-description.component';
import { FiltersComponent } from './immer-app/components/products/filters/filters.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule.withServerTransition({ appId: 'example-app' }),
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        TransferHttpCacheModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            //{
            // path: '',
            // component: AppComponent,
            // children: [
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
                // { path: '', pathMatch: 'full', redirectTo: 'immer' },
                // { path: 'immutable', loadChildren: './immutable-app/immutable.module#ImmutableAppModule' },
                // { path: 'immer', loadChildren: './immer-app/immer.module#ImmerAppModule' }
        //]}
    ], { useHash: false }),
        StoreModule.provideStore(initialState, false, {
            debugger: {
                enableInitialDebugging: true,
                options: {
                    enableConsoleOutput: false,
                    enableDevToolsOutput :true
                }
            },
            history: {
                storeHistoryItems: 50,
                collectHistory :true
            }
        }),
        ImmerDataStrategyModule
    ],
    declarations: [
        AppComponent,
        TodosComponent,
        TodoDescription,
        RouterHistoryTestComponent,
        ProductsComponent,
        FiltersComponent,
        StorageTestComponent
    ],
    bootstrap: [
        AppComponent 
    ]
})
export class AppModule {
}