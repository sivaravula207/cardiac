import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedashboardComponent } from './archivedashboard.component';

describe('ArchivedashboardComponent', () => {
  let component: ArchivedashboardComponent;
  let fixture: ComponentFixture<ArchivedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
