import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertisseurComponentComponent } from './convertisseur-component.component';

describe('ConvertisseurComponentComponent', () => {
  let component: ConvertisseurComponentComponent;
  let fixture: ComponentFixture<ConvertisseurComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertisseurComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertisseurComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
