import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {TreeComponent} from './tree/tree/tree.component';
import {ChildComponent} from './tree/child/child.component';
import {ButtonClickComponent} from './component/button-click/button-click.component';
import {FormsModule} from '@angular/forms';
import {InputChangeComponent} from './component/input-change/input-change.component';
import { ShowInputsComponent } from './component/show-inputs/show-inputs.component';
import { IntervalComponent } from './component/interval/interval.component';
import { FactorialComponent } from './component/factorial/factorial.component';
import { AccessChildComponent } from './component/access-child/access-child.component';
import { IncrementalArrayComponent } from './component/incremental-array/incremental-array.component';
import {ExampleService} from './component/incremental-array/example.service';
import { PromiseAsyncComponent } from './component/promise-async/promise-async.component';
import { AsyncPipeObservablesComponent } from './component/async-pipe-observables/async-pipe-observables.component';
import { ChangeDetection1Component } from './component/change-detection1/change-detection1.component';
import { DefaultObjectComponent } from './component/change-detection1/default-object/default-object.component';
import { OnpushObjectComponent } from './component/change-detection1/onpush-object/onpush-object.component';
import { OnpushValueComponent } from './component/change-detection1/onpush-value/onpush-value.component';
import { ChangeDetection2Component, CounterComponent } from './component/change-detection2/change-detection2.component';
@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    ChildComponent,
    ButtonClickComponent,
    InputChangeComponent,
    ShowInputsComponent,
    IntervalComponent,
    FactorialComponent,
    AccessChildComponent,
    IncrementalArrayComponent,
    PromiseAsyncComponent,
    AsyncPipeObservablesComponent,
    ChangeDetection1Component,
    DefaultObjectComponent,
    OnpushObjectComponent,
    OnpushValueComponent,
    ChangeDetection2Component,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
