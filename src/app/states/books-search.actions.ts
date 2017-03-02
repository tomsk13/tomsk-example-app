import { BookSearchInitialState } from './book-search.initial-state';
import { InjectStore, HasStore, Store } from 'ng-state';
import * as Immutable from 'immutable';

@InjectStore('books/search', BookSearchInitialState)
export class BooksSearchStateActions implements HasStore {
    store: Store<Immutable.Map<any, any>>;

    get loading() {
        return this.store.map(state => state.get('loading'));
    }

    get books() {
        return this.store.map(state => state.get('entities'));
    }

    getBook(id) {
        return this.books.map(books => books.find(book => book.get('id') === id));
    }

    toggleLoading(isLoading) {
        this.store.update(state => {
            state.set('loading', isLoading);
        });
    }

    clearBooks() {
        this.store.update(state => {
            state.set('entities', Immutable.fromJS([]));
        });
    }

    addBooks(books: any, existingCollection: any) {
        books = Immutable.fromJS(books);

        this.store.update(state => {
            const newBooks = books.filter(book => {
                return existingCollection.indexOf(book) < 0;
            });
            state.set('entities', newBooks);
        });
    }
}