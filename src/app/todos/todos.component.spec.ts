import { ComponentFixture, TestBed } from '@angular/core/testing';

import { todosComponent } from './todos.component';

describe('todosComponent', () => {
  let component: todosComponent;
  let fixture: ComponentFixture<todosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [todosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(todosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
