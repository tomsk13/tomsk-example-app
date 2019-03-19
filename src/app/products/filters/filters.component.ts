import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store, NgFormStateManager } from 'ng-state';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {
    filters: FormGroup;
    ngFormStateManager: NgFormStateManager;

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.filters = new FormGroup({
            condition: new FormGroup({
                new: new FormControl(false),
                used: new FormControl(false),
                notSpecified: new FormControl(false)
            }),
            location: new FormControl()
        });

        this.ngFormStateManager = this.store.select(['form'])
            .form.bind(this.filters);
    }

    reset() {
        this.ngFormStateManager.reset();
    }

    ngOnDestroy() {
        this.ngFormStateManager.destroy();
    }

}