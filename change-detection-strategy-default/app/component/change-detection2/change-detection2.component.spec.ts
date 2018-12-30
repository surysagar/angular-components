import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetection2Component } from './change-detection2.component';

describe('ChangeDetection2Component', () => {
  let component: ChangeDetection2Component;
  let fixture: ComponentFixture<ChangeDetection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
