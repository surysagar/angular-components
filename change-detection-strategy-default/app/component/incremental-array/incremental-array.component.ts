import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';
import { ExampleService } from "./example.service";

@Component({
  selector: 'incremental-array',
  template: `my {{number}}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncrementalArrayComponent implements OnInit {

  arr1: Array<{id: number, text: string}> = [];
  // import { of } from 'rxjs'; then use
  // of(1).subscribe(console.log);
  // import { of } from 'rxjs/observable/of'
  number: Array<number> = [12];

  constructor(
    private changeDetection: ChangeDetectorRef,
    private service: ExampleService
  ) { }



  ngOnInit() {
    this.number = [12];
    // var _this = this;
    this.service.getNumbers().subscribe(data => {
      // console.log(_this.number);
      // _this.number.push(data);             // <-- need immutable data
       this.changeDetection.markForCheck();                // <-- need to update the DOM
    });
  }

}
