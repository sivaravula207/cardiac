import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsdatabaseComponent } from './authorsdatabase.component';

describe('AuthorsdatabaseComponent', () => {
  let component: AuthorsdatabaseComponent;
  let fixture: ComponentFixture<AuthorsdatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsdatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsdatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
