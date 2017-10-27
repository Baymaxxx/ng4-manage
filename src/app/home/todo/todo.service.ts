import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Http } from '@angular/http';
@Injectable()
export class TodoService {
  url = "https://www.easy-mock.com/mock/595af9579adc231f357033a7/niceFish"
  userId: number;
  constructor(private http: Http) {
    this.userId = Number(localStorage.getItem('userId'));
  }

  getTodos(): Promise<Todo[]> {
    return this.http
      .get(`${this.url}/todo`)
      .toPromise()
      .then(res => {
        let todos = res.json().todos;
        console.log(todos)        
        todos = todos.filter(item => {
          console.log(item.userId===this.userId);        
          return item.userId === this.userId;
        });
        return todos as Todo[];
      })
  }
  addTodo(desc: string): Promise<Todo> {
    let todo = {
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
    let updateTodo = Object.assign({}, todo, { completed: !todo.completed });
    return this.http.put(url, JSON.stringify(updateTodo))
      .toPromise()
      .then(() => {
        return updateTodo as Todo;
      })
  }
  // DELETE /todos/:id
  deleteTodoById(id: string): Promise<void> {
    const url = `${this.url}/todo/${id}`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
  }
}
