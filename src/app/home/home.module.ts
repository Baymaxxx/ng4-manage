import { ProjectService } from './../core/services/project.service';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './../shared/shared.module';
import { TodoService } from './todo/todo.service';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { RoomsComponent } from './rooms/rooms.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    PagesModule
  ],
  declarations: [HomeComponent, RoomsComponent],
  providers: [ProjectService],
  exports: [HomeComponent]
})
export class HomeModule { }
