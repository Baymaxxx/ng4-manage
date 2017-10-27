import { TodoService } from './todo.service';
import { Todo } from './todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  desc: string;
  constructor(private todoService: TodoService) {
    this.todos = [];
    this.desc = '';
  }

  ngOnInit() {
    let want = () => {
      console.log('这是你想要执行的代码');
    }
    let fn = () => {
      this.getTodos();
      return new Promise((resolve, resject) => {
        resolve();
      })
    }
    fn().then(() => {
      want();
    })
  }
  addTodo(): void {
    this.todoService.addTodo(this.desc)
      .then(todos => {
        console.log(todos);

        this.todos.push(todos);
        this.desc = '';
      })
  }
  getTodos(): void {
    this.todoService.getTodos()
      .then(todos => {
        this.todos = todos;
      })
  }
  toggleTodo(todo: Todo): void {
    let i = this.todos.indexOf(todo);
    this.todoService.toggleTodo(todo)
      .then(() => {
        this.todos[i].completed = !this.todos[i].completed
      })
  }
  removeTodo(todo: Todo): void {
    let i = this.todos.indexOf(todo);
    this.todoService.deleteTodoById(todo.id)
      .then(() => {
        this.todos = [...this.todos.slice(0, i),...this.todos.slice(i+1)]
      })
  }
}
