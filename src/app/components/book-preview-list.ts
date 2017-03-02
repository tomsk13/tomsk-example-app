import { BooksSearchStateActions } from './../states/books-search.actions';
import { CollectionStateActions } from './../states/books-collection.actions';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ComponentState, IComponentStateActions } from 'ng-state';

@ComponentState((component: BookPreviewListComponent) => {
  // tslint:disable-next-line:triple-equals
  return component.isFromCollection ? CollectionStateActions : BooksSearchStateActions;
})
@Component({
  selector: 'bc-book-preview-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-preview
      *ngFor="let book of state.books | async; let i = index;"
      [statePath]="statePath" [stateIndex]="i"
      [isFromCollection]="isFromCollection">
    </bc-book-preview>
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `]
})
export class BookPreviewListComponent  implements IComponentStateActions<CollectionStateActions | BooksSearchStateActions> {
  state: CollectionStateActions | BooksSearchStateActions;

  @Input() isFromCollection: boolean;
}