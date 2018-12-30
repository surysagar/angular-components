import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalArrayComponent } from './incremental-array.component';

describe('IncrementalArrayComponent', () => {
  let component: IncrementalArrayComponent;
  let fixture: ComponentFixture<IncrementalArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementalArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementalArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
