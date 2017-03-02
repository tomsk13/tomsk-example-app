import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Rx from 'rxjs';
import { Book } from '../models/book';

@Injectable()
export class GoogleBooksService {
  private API_PATH: string = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: Http) { }

  searchBooks(queryTitle: string): Rx.Observable<any> {
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
      .map(res => {
        return res.json().items || [];
      }).take(1);
  }

  retrieveBook(volumeId: string): Rx.Observable<Book> {
    return this.http.get(`${this.API_PATH}/${volumeId}`)
      .map(res => res.json());
  }
}
