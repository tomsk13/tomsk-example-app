import { AppComponent } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { todoService } from './immer-app/service';
import { Store } from '@ng-state/store';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule.withServerTransition({ appId: 'example-app' }),
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        TransferHttpCacheModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', pathMatch: 'full', redirectTo: 'immer' },
            { path: 'immutable', loadChildren: './immutable-app/immutable.module#ImmutableAppModule' },
            { path: 'immer', loadChildren: './immer-app/immer.module#ImmerAppModule' }
        ], { useHash: false })
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent 
    ],
    providers:[todoService,Store]
})
export class AppModule {
}