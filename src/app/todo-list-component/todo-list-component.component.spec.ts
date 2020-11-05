import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponentComponent } from './todo-list-component.component';

describe('TodoListComponentComponent', () => {
  let component: TodoListComponentComponent;
  let fixture: ComponentFixture<TodoListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
