import { TodoRoutingModule } from './todo.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserModule } from './../../routes/user/user.module';
import { SharedModule } from './../../shared/shared.module';
import { TodoService } from './todo.service';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHomeComponent } from './todo-home/todo-home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TodoRoutingModule
  ],
  declarations: [TodoComponent, TodoListComponent, TodoHomeComponent],
  providers: [TodoService]
})
export class TodoModule { }
