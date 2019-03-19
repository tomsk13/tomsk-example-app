import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from 'ng-state';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit, OnDestroy {
    constructor(private store: Store<any>) {
    }

    ngOnInit() {
        this.store.select(['form'])
            .pipe(untilDestroyed(this))
            .subscribe((val: any) => console.log(val.toJS()));
    }

    ngOnDestroy() {
    }
}
