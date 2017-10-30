import { SharedModule } from './../shared/shared.module';
import { TodoService } from './todo/todo.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [HomeComponent, TodoComponent, TodoListComponent],
  providers: [TodoService]
})
export class HomeModule { }
