import { Component, ViewChild, ElementRef, OnInit, OnChange } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'change-detection1',
  templateUrl: './change-detection1.component.html',
  styleUrls: ['./change-detection1.component.css']
})
export class ChangeDetection1Component implements OnInit, OnChange {

  public default = { value: 'Hello world' };
  public onpush = { value: 'Hello world' };
  public onpush1 = { value: 'Hello world1'}
  public value = 'Hello world';

  // below code used for change-detection-observables-solution
  @ViewChild('inputOnpush', {read: ElementRef})
  private _inputValue: ElementRef;

  public changeObservable$: Observable<{ value: string }>;

  ngOnInit() {
    this.changeObservable$ = Observable.fromEvent(this._inputValue.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return { value: event.srcElement.value };
        })
      );
  }

  ngOnChange() {
    this.onpush1 = this.onpush;
  }

}

//<div class="containers">
//<div class="container">
//  <h4>On push strategy with an Value</h4>
//<label for="onpush-input">Input:</label><br/>
//<input type="text" [(ngModel)]="value" name="default-input"  class="onpush-input"/>
//<onpush-value [msg]="value"></onpush-value>
//</div>
//
//<div class="container">
//  <h4>On push strategy with an object</h4>
//<label for="onpush-input">Input:</label><br/>
//<input type="text" [(ngModel)]="onpush.value" name="default-input"  class="onpush-input"/>
//<onpush-object [msg]="onpush"></onpush-object>
//</div>
//
//<div class="container">
//  <h4>Default strategy with an object</h4>
//<label for="default-input">Input:</label><br/>
//<input type="text" [(ngModel)]="default.value" name="default-input"  class="default-input"/>
//  <default-object [msg]="default"></default-object>
//</div>
//</div>
