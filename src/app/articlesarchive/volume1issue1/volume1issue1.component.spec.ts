import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Volume1issue1Component } from './volume1issue1.component';

describe('Volume1issue1Component', () => {
  let component: Volume1issue1Component;
  let fixture: ComponentFixture<Volume1issue1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Volume1issue1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Volume1issue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
