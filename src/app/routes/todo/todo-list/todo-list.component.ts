import { Todo } from './../todo.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() onRemoveTodo = new EventEmitter<Todo>();
  @Output() onToggleTodo = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit() {
  }
  toggleTodo(todo: Todo): void {
    this.onToggleTodo.emit(todo);
  }
  removeTodo(todo: Todo): void {
    this.onRemoveTodo.emit(todo);
  }
}
