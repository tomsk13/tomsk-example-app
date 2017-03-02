import { LayoutStateActions } from './../states/layout.actions';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ComponentState, IComponentStateActions } from 'ng-state';

@ComponentState(LayoutStateActions)
@Component({
  selector: 'bc-nav-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a md-list-item [routerLink]="routerLink" (click)="closeSidenav()">
      <md-icon md-list-icon>{{ icon }}</md-icon>
      <span md-line><ng-content></ng-content></span>
      <span md-line class="secondary">{{ hint }}</span>
    </a>
  `,
  styles: [`
    .secondary {
      color: rgba(0, 0, 0, 0.54);
    }
  `]
})
export class NavItemComponent implements IComponentStateActions<LayoutStateActions> {
  @Input() icon: string = '';
  @Input() hint: string = '';
  @Input() routerLink: string | any[] = '/';

  statePath: string[];
  sideNameState: any;

  state: LayoutStateActions;

  closeSidenav() {
    this.state.toggleSideNav(false);
  }
}