import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'bc-find-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-search></bc-book-search>
    <bc-book-preview-list [statePath]="statePath" [isFromCollection]="false"></bc-book-preview-list>
  `
})
export class FindBookPageComponent {
}
