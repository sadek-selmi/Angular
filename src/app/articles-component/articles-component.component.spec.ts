import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesComponentComponent } from './articles-component.component';

describe('ArticlesComponentComponent', () => {
  let component: ArticlesComponentComponent;
  let fixture: ComponentFixture<ArticlesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
