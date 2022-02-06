import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaccesspolicyComponent } from './openaccesspolicy.component';

describe('OpenaccesspolicyComponent', () => {
  let component: OpenaccesspolicyComponent;
  let fixture: ComponentFixture<OpenaccesspolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenaccesspolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenaccesspolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
