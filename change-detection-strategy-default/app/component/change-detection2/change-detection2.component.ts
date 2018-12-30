import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'change-detection2',
  template: `
  <app-counter [data]="data"></app-counter>
  <button (click)="plus()"> + 1</button>
  Parent component's value {{data.num}}
  `,
  styleUrls: ['./change-detection2.component.css']
})
export class ChangeDetection2Component {

  data = { num: 1 };

  plus() {
    ++this.data.num;
  }
}


@Component({
  selector: 'app-counter',
  template: `
    <span>Child component's value using <br>
    changeDetectorRef.markForCheck : {{ data.num }}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CounterComponent implements OnInit {
  @Input() data;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    setInterval(() => {
      this.changeDetectorRef.markForCheck();
    }, 2000)
  }
}
