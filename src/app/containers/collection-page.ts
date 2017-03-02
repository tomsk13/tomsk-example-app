import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollectionStateActions } from './../states/books-collection.actions';
import { ComponentState, IComponentStateActions } from 'ng-state';

@ComponentState(CollectionStateActions)
@Component({
  selector: 'bc-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>My Collection</md-card-title>
    </md-card>

    <bc-book-preview-list [statePath]="statePath" [isFromCollection]="true"></bc-book-preview-list>
  `,
  styles: [`
    md-card-title {
      display: flex;
      justify-content: center;
    }
  `]
})
export class CollectionPageComponent implements IComponentStateActions<CollectionStateActions> {
  state: CollectionStateActions;
}
