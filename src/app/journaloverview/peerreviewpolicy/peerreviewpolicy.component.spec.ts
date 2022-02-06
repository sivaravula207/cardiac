import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerreviewpolicyComponent } from './peerreviewpolicy.component';

describe('PeerreviewpolicyComponent', () => {
  let component: PeerreviewpolicyComponent;
  let fixture: ComponentFixture<PeerreviewpolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerreviewpolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerreviewpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
