import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      userId: 10,
      title: 'groceries',
      id: 0,
      completed: false,
    },
    {
      userId: 10,
      title: 'shopping',
      id: 1,
      completed: false,
    },
  ];
  constructor() {}
}
