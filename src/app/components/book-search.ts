import { Component, OnChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BooksSearchStateActions } from '../states/books-search.actions';
import { GoogleBooksService } from './../services/google-books';
import { ComponentState, IComponentStateActions, Store } from 'ng-state';

@ComponentState(BooksSearchStateActions)
@Component({
  selector: 'bc-book-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>Find a Book</md-card-title>
      <md-card-content>
        <md-input placeholder="Search for a book" (keyup)="search($event.target.value)"></md-input>
        <md-spinner [class.show]="state.loading | async"></md-spinner>
      </md-card-content>
    </md-card>
  `,
  styles: [`
    md-card-title,
    md-card-content {
      display: flex;
      justify-content: center;
    }

    md-input {
      width: 300px;
    }

    md-card-spinner {
      padding-left: 60px; // Make room for the spinner
    }

    md-spinner {
      width: 30px;
      height: 30px;
      position: relative;
      top: 10px;
      left: 10px;
      opacity: 0.0;
    }

    md-spinner.show {
      opacity: 1.0;
    }
  `]
})
export class BookSearchComponent implements OnChanges, OnInit, IComponentStateActions<BooksSearchStateActions> {
  state: BooksSearchStateActions;

  constructor(private googleBooks: GoogleBooksService, private store: Store<any>) {
  }

  ngOnInit() {
    this.state.clearBooks();
  }

  search(query: string) {
    if (query === '') {
      this.state.clearBooks();
      return;
    }

    this.state.toggleLoading(true);

    this.googleBooks.searchBooks(query)
      .take(1)
      .subscribe(books => {
        this.state.toggleLoading(false);
        this.state.addBooks(books, this.getBooksInCollection());
      }, error => {
        this.state.toggleLoading(false);
      });
  }

  private getBooksInCollection() {
    let collection;
    this.store.select(['books', 'collection'])
      .take(1)
      .subscribe(books => collection = books);

    return collection;
  }

  ngOnChanges(changes) {
    console.log('search changes => ', changes);
  }
}
