import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'onpush-object',
  templateUrl: 'onpush-object.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushObjectComponent {
  @Input()
  public msg = { value: '' };

  private _count = 0;

  public renderCounter() {
    return ++this._count;
  }
}

//<h3 *ngIf="msg">{{msg.value}}</h3>
//<span>Render counter:  {{renderCounter()}}</span>
