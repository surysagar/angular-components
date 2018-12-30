import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetection1Component } from './change-detection1.component';

describe('ChangeDetection1Component', () => {
  let component: ChangeDetection1Component;
  let fixture: ComponentFixture<ChangeDetection1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetection1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
