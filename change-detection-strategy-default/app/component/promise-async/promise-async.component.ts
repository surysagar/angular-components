import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'promise-async',
  template: `<div>
    <code>promise | async</code>:
    <button (click)="clicked()">{{ arrived ? 'Reset' : 'Resolve' }}</button>
    <span>Wait for it... {{ greeting | async }}</span>
  </div>`
})
export class PromiseAsyncComponent {

  greeting: Promise<string> = null;
  arrived: boolean = false;

  private resolve: Function = null;

  constructor() { this.reset(); }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve !('hi there!');
      this.arrived = true;
    }
  }

}
