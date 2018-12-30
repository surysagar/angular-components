import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'async-pipe-observables',
  templateUrl: './async-pipe-observables.component.html'
})
export class AsyncPipeObservablesComponent implements OnInit {

  public users$: Rx.Observable<any>;

  ngOnInit() {
    this.users$ = Rx.Observable.of([
        { id: 1111, name: 'ES5', email: 'Array.prototype.slice.call(arguments) || [].slice.call(arguments)' },
        { id: 2222, name: 'ES6', email: 'Array.from(arguments) || [...arguments]' },
        { id: 3333, name: 'User 3', email: 'u3@dummy.com' }
      ])
      .do(() => console.info('Subscription is created'));
  }

}

// html is
//<ul>
//  <li *ngFor="let user of users$ | async">{{ user.id }}{{ user.name }}{{ user.email }}</li>
//</ul>
