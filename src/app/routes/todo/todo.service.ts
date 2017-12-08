import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Http } from '@angular/http';
@Injectable()
export class TodoService {
  url = 'https://www.easy-mock.com/mock/595af9579adc231f357033a7/niceFish';
  userId: number;
  constructor(private http: Http) {
  }
  addTodo(desc: string): Promise<Todo> {
    this.userId = Number(localStorage.getItem('userId'));
    const todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false,
      userId: this.userId
    };
    return this.http
      .post(`${this.url}/todo`, JSON.stringify(todo))
      .toPromise()
      .then(() => {
        return todo as Todo;
      });
  }
  // PUT /todos/:id
  toggleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.url}/todo/${todo.id}`;
    const updateTodo = Object.assign({}, todo, { completed: !todo.completed });
    return this.http.put(url, JSON.stringify(updateTodo))
      .toPromise()
      .then(() => {
        return updateTodo;
      });
  }
  // DELETE /todos/:id
  deleteTodoById(id: string): Promise<void> {
    const url = `${this.url}/todo/${id}`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null);
  }
  // GET
  filterTodos(filter: string): Promise<Todo[]> {
    this.userId = Number(localStorage.getItem('userId'));
    return this.http.get(`${this.url}/todo`)
      .toPromise()
      .then(res => {
        let todos = res.json().todos;
        todos = todos.filter(item => {
          return item.userId === this.userId;
        });
        switch (filter) {
          case 'all':
            return todos;
          case 'active':
            return todos.filter(item => item.completed === false);
          case 'completed':
            return todos.filter(item => item.completed === true);
        }
      });
  }
}
