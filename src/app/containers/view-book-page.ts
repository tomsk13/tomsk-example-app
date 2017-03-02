import { CollectionStateActions } from './../states/books-collection.actions';
import { Subscription } from 'rxjs/Subscription';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksSearchStateActions } from './../states/books-search.actions';
import { ComponentState, IComponentStateActions } from 'ng-state';

@ComponentState((component: ViewBookPageComponent) => {
  return component.isFromCollection === 'true' ? CollectionStateActions : BooksSearchStateActions;
})
@Component({
  selector: 'bc-view-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-selected-book-page [book]="state.getBook(id) | async"></bc-selected-book-page>
  `
})
export class ViewBookPageComponent implements OnDestroy, IComponentStateActions<BooksSearchStateActions | CollectionStateActions> {
  state: BooksSearchStateActions | CollectionStateActions;
  id; isFromCollection;

  routerSubscription: Subscription;

  constructor(route: ActivatedRoute) {
    this.routerSubscription = route.params
      .subscribe(params => {
        this.id = params['id'];
        this.isFromCollection = params['isFromCollection'];
      });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
