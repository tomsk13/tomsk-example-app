import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'book-collection-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <div class="container">
          <nav class="nav">
            <li class="nav-item"><a class="nav-link" routerLink="/">Todos</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/forms">Forms</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/storage">Storage</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/router-history-test">Router history Test</a></li>
        </nav>
        <router-outlet></router-outlet>
      </div>

      <state-history></state-history>
  `
})
export class AppComponent {

}