import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesinpressComponent } from './articlesinpress.component';

describe('ArticlesinpressComponent', () => {
  let component: ArticlesinpressComponent;
  let fixture: ComponentFixture<ArticlesinpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesinpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesinpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
