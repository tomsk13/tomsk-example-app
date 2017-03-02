import { InjectStore, HasStore, Store } from 'ng-state';
import * as Immutable from 'immutable';

@InjectStore('books/collection')
export class CollectionStateActions implements HasStore {
    store: Store<Immutable.List<any>>;

    get books() {
        return this.store;
    }

    getBook(id) {
        return this.books.map(books => books.find(book => book.get('id') === id));
    }

    bookInCollection(selectedBook) {
        return this.books.map(books => {
            if (!selectedBook) {
                return false;
            }

            const existingBook = books.find(book => book.get('id') === selectedBook.get('id'));
            return !!existingBook;
        });
    }

    addBook(book: any) {
        this.store.update(state => {
            state.push(book);
        });
    }

    removeBook(id) {
        this.store.update(state => {
            state.delete(state.findIndex(book => book.get('id') === id));
        });
    }
}