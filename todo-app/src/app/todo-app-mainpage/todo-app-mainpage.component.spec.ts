import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAppMainpageComponent } from './todo-app-mainpage.component';

describe('TodoAppMainpageComponent', () => {
  let component: TodoAppMainpageComponent;
  let fixture: ComponentFixture<TodoAppMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAppMainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAppMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
