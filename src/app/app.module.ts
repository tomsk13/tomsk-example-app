import { AppComponent } from './components/app';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterHistoryTestComponent } from './components/router-history-test.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from 'ng-state';
import { TodoDescription } from './components/todo-description.component';
import { TodosComponent } from './components/todos.component';
import { initialState } from './initial-state';
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(initialState),
  ],
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDescription,
    RouterHistoryTestComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}