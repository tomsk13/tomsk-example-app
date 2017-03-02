import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentState, IComponentStateActions } from 'ng-state';
import { LayoutStateActions } from './../states/layout.actions';

@ComponentState(LayoutStateActions)
@Component({
  selector: 'bc-sidenav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-sidenav [opened]="state.opened | async">
      <md-nav-list>
        <ng-content></ng-content>
      </md-nav-list>
    </md-sidenav>
  `,
  styles: [`
    md-sidenav {
      width: 300px;
    }
  `]
})
export class SidenavComponent implements IComponentStateActions<LayoutStateActions> {
  state: LayoutStateActions;
}