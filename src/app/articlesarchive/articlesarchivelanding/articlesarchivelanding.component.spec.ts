import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesarchivelandingComponent } from './articlesarchivelanding.component';

describe('ArticlesarchivelandingComponent', () => {
  let component: ArticlesarchivelandingComponent;
  let fixture: ComponentFixture<ArticlesarchivelandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesarchivelandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesarchivelandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
