import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'onpush-value',
  templateUrl: 'onpush-value.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushValueComponent {
  @Input()
  public msg = '';

  private _count = 0;

  public renderCounter() {
    return ++this._count;
  }
}

//<h3 *ngIf="msg">{{msg}}</h3>
//<span>Render counter:  {{renderCounter()}}</span>
