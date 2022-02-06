import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicklinksmainComponent } from './quicklinksmain.component';

describe('QuicklinksmainComponent', () => {
  let component: QuicklinksmainComponent;
  let fixture: ComponentFixture<QuicklinksmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicklinksmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicklinksmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
