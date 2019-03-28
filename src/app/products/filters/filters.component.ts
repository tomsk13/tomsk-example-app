import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store, NgFormStateManager, ShoulUpdateStateParams } from 'ng-state';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {
    filters: FormGroup;
    ngFormStateManager: NgFormStateManager;

    location: Observable<any>;

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

        this.location = this.store.select(['form', 'location']);

        this.ngFormStateManager = this.store.select(['form'])
            .form.bind(this.filters)
            .shouldUpdateState((params: ShoulUpdateStateParams) => true)
            .onChange(state => {});
    }

    reset() {
        this.ngFormStateManager.reset();
    }

    ngOnDestroy() {
        this.ngFormStateManager.destroy();
    }

}