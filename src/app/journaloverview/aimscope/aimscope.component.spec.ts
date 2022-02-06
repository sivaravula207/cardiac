import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AimscopeComponent } from './aimscope.component';

describe('AimscopeComponent', () => {
  let component: AimscopeComponent;
  let fixture: ComponentFixture<AimscopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AimscopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AimscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
