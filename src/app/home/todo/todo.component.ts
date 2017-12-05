import { Router, ActivatedRoute, Params } from '@angular/router';
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
  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute) {
    this.todos = [];
    this.desc = '';
    this.route.params.forEach((params: Params) => {
      const filter = params['filter'];
      this.filterTodos(filter);
    });
  }

  ngOnInit() {
    const want = () => {
      console.log('这是你想要执行的代码');
    };
    const fn = () => {
      return new Promise((resolve, resject) => {
        resolve();
      });
    };
    fn().then(() => {
      want();
    });
  }
  addTodo(): void {
    this.todoService.addTodo(this.desc)
      .then(todos => {
        console.log(todos);

        this.todos.push(todos);
        this.desc = '';
      });
  }

  toggleTodo(todo: Todo): Promise<void> {
    console.log(todo);

    let i = this.todos.indexOf(todo);
    return this.todoService.toggleTodo(todo)
      .then(updateTodo => {
        this.todos[i] = updateTodo;
        return null;
      });
  }
  removeTodo(todo: Todo): void {
    let i = this.todos.indexOf(todo);
    this.todoService.deleteTodoById(todo.id)
      .then(() => {
        this.todos = [...this.todos.slice(0, i), ...this.todos.slice(i + 1)]
      });
  }
  filterTodos(filter: string) {
    this.todoService.filterTodos(filter)
      .then(todos => {
        this.todos = todos;
        console.log(todos);
      });
  }
  clearCompleted(todos: Todo[]) {
    let completed_todos = this.todos.filter(item => item.completed === true);
    let active_todos = this.todos.filter(item => item.completed === false);
    completed_todos.map(item => {
      this.todoService.deleteTodoById(item.id)
        .then(() => {
          this.todos = active_todos;
        });
    });
  }
}
