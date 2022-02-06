import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialissueComponent } from './specialissue.component';

describe('SpecialissueComponent', () => {
  let component: SpecialissueComponent;
  let fixture: ComponentFixture<SpecialissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
