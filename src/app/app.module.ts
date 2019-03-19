import { AppComponent } from './components/app';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterHistoryTestComponent } from './components/router-history-test.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from 'ng-state';
import { TodoDescription } from './components/todo-description.component';
import { TodosComponent } from './components/todos.component';
import { initialState } from './initial-state';
import { routes } from './routes';
import { environment } from '../environments/environment';
import { ProductsComponent } from './products/products.component';
import { FiltersComponent } from './products/filters/filters.component';
import { StorageTestComponent } from './components/storage-test.component';

const isProd = false;

@NgModule({
    imports: [
        CommonModule,
        BrowserModule.withServerTransition({ appId: 'example-app' }),
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        TransferHttpCacheModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes, { useHash: true }),
        StoreModule.provideStore(initialState, isProd),
    ],
    declarations: [
        AppComponent,
        TodosComponent,
        TodoDescription,
        RouterHistoryTestComponent,
        StorageTestComponent,
        ProductsComponent,
        FiltersComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}