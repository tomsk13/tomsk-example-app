import { BooksPreviewStateActions } from './../states/book-preview.actions';
import { Component, Input, OnInit } from '@angular/core';
import { ComponentState, IComponentStateActions } from 'ng-state';
import * as Rx from 'rxjs';

@ComponentState(BooksPreviewStateActions)
@Component({
  selector: 'bc-book-preview',
  template: `
    <a [routerLink]="['/book', book.id, isFromCollection]">
      <md-card>
        <md-card-title-group>
          <img md-card-sm-image *ngIf="book.thumbnail" [src]="book.thumbnail"/>
          <md-card-title>{{ book.title }}</md-card-title>
          <md-card-subtitle *ngIf="book.subtitle">{{ book.subtitle }}</md-card-subtitle>
        </md-card-title-group>
        <md-card-content>
          <p *ngIf="description">{{ book.description | bcEllipsis }}</p>
        </md-card-content>
        <md-card-footer>
          <bc-book-authors [book]="book"></bc-book-authors>
        </md-card-footer>
      </md-card>
    </a>

  `,
  styles: [`
    md-card {
      width: 400px;
      height: 300px;
      margin: 15px;
    }
    md-card-title {
      margin-right: 10px;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    img {
      width: 60px;
      min-width: 60px;
      margin-left: 5px;
    }
    md-card-content {
      margin-top: 15px;
    }
    span {
      display: inline-block;
      font-size: 13px;
    }
    md-card-footer {
      padding: 0 25px 25px;
    }
  `]
})
export class BookPreviewComponent implements OnInit, IComponentStateActions<BooksPreviewStateActions> {
  state: BooksPreviewStateActions;

  @Input() isFromCollection: boolean;

  book;
  bookSubscription: Rx.Subscription;

  ngOnInit() {
    this.state.book
      .take(1)
      .subscribe(book => {
        this.book = book;
      });
  }
}