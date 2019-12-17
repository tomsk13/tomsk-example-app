import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'todo-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="container">
       <!-- < nav class="nav">
            <li class="nav-item"><a href="/immutable" class="nav-link">ImmutableJs App</a></li>
            <li class="nav-item"><a href="/immer" class="nav-link">Immer App</a></li>
        </nav> -->
        <h5>My Todo App</h5>
        <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
}