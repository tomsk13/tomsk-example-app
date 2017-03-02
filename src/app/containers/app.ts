import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'book-collection-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-layout>
      <bc-sidenav>
        <bc-nav-item routerLink="/" icon="book" hint="View your book collection">
          My Collection
        </bc-nav-item>
        <bc-nav-item routerLink="/book/find" icon="search" hint="Find your next book!">
          Browse Books
        </bc-nav-item>
      </bc-sidenav>
      <bc-toolbar>
        Book Collection
      </bc-toolbar>
      <router-outlet></router-outlet>
    </bc-layout>
    <state-history></state-history>
  `
})
export class AppComponent {

}