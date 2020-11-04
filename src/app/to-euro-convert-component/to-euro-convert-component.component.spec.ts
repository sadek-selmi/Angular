import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToEuroConvertComponentComponent } from './to-euro-convert-component.component';

describe('ToEuroConvertComponentComponent', () => {
  let component: ToEuroConvertComponentComponent;
  let fixture: ComponentFixture<ToEuroConvertComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToEuroConvertComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToEuroConvertComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
