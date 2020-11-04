import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsComponentComponent } from './films-component.component';

describe('FilmsComponentComponent', () => {
  let component: FilmsComponentComponent;
  let fixture: ComponentFixture<FilmsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
