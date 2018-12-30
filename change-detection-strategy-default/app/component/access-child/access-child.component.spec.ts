import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessChildComponent } from './access-child.component';

describe('AccessChildComponent', () => {
  let component: AccessChildComponent;
  let fixture: ComponentFixture<AccessChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
