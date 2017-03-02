import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { ComponentsModule } from './components';

import { AppComponent } from './containers/app';
import { FindBookPageComponent } from './containers/find-book-page';
import { ViewBookPageComponent } from './containers/view-book-page';
import { SelectedBookPageComponent } from './containers/selected-book-page';
import { CollectionPageComponent } from './containers/collection-page';
import { NotFoundPageComponent } from './containers/not-found-page';

import { GoogleBooksService } from './services/google-books';

import { routes } from './routes';

import { initialState } from './initial-state';
import { StoreModule } from 'ng-state';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule.forRoot(),
    ComponentsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(initialState),
  ],
  declarations: [
    AppComponent,
    FindBookPageComponent,
    SelectedBookPageComponent,
    ViewBookPageComponent,
    CollectionPageComponent,
    NotFoundPageComponent
  ],
  providers: [
    GoogleBooksService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}