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
    this.getTodos();
  }
  addTodo(): void {
    let todo = this.todoService.addTodo(this.desc);
    console.log(todo);
    this.todos.push(todo);
    this.desc = '';
  }
  getTodos(): void {
    this.todoService.getTodos()
      .then((todo) => {
        this.todos.push(todo);
        console.log(this.todos)
      })
  }
}
