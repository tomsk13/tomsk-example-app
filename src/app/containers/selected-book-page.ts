import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionStateActions } from './../states/books-collection.actions';
import { ComponentState, IComponentStateActions } from 'ng-state';
import { Book } from '../models/book';

@ComponentState(CollectionStateActions)
@Component({
  selector: 'bc-selected-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-detail
      [book]="book"
      [inCollection]="state.bookInCollection(book) | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </bc-book-detail>
  `
})
export class SelectedBookPageComponent implements IComponentStateActions<CollectionStateActions> {
  @Input() book;
  state: CollectionStateActions;

  constructor(private router: Router) {
  }

  addToCollection(book: Book) {
    this.state.addBook(book);
  }

  removeFromCollection(id) {
    this.state.removeBook(id);
    this.router.navigate(['']);
  }
}
