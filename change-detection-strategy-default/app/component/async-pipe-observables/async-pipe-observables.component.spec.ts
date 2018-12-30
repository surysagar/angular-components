import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeObservablesComponent } from './async-pipe-observables.component';

describe('AsyncPipeObservablesComponent', () => {
  let component: AsyncPipeObservablesComponent;
  let fixture: ComponentFixture<AsyncPipeObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPipeObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipeObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
