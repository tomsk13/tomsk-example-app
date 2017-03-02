import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentState, IComponentStateActions } from 'ng-state';
import { LayoutStateActions } from './../states/layout.actions';

@ComponentState(LayoutStateActions)
@Component({
  selector: 'bc-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-toolbar color="primary">
      <button md-icon-button (click)="openSidenav()">
        <md-icon>menu</md-icon>
      </button>
      <ng-content></ng-content>
    </md-toolbar>
  `
})
export class ToolbarComponent implements IComponentStateActions<LayoutStateActions> {
  state: LayoutStateActions;
  openSidenav() {
    this.state.toggleSideNav(true);
  }
}