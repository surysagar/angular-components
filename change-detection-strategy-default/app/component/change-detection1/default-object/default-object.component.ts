import { Component, Input } from '@angular/core';

@Component({
  selector: 'default-object',
  templateUrl: 'default-object.component.html'
})
export class DefaultObjectComponent {
  @Input()
  public msg = { value: '' };

  private _count = 0;

  public renderCounter() {
    return ++this._count;
  }
}

//
//<h3 *ngIf="msg">{{msg.value}}</h3>
//<span>Render counter:  {{renderCounter()}}</span>
