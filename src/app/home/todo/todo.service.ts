import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Http } from '@angular/http';
@Injectable()
export class TodoService {
  todo: Todo;
  url = "https://www.easy-mock.com/mock/595af9579adc231f357033a7/niceFish"
  constructor(private http: Http) {
  }

  getTodos(): Promise<any> {
    return this.http.get(`${this.url}/todo`)
      .toPromise()
      .then(res => {
        console.log(res.json().todos)
        return res.json().todos as Todo[];
      })
  }
  addTodo(todoItem: string): Todo {
    let todo = {
      id: UUID.UUID(),
      desc: todoItem,
      completed: false
    };
    return this.todo;
  }
}
