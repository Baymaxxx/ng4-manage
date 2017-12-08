import { ProjectService } from './project/project.service';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { TodoService } from './todo/todo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { routes } from './routes';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes, { useHash: true }),
    PagesModule
  ],
  declarations: [RoomsComponent],
  providers: [ProjectService, UserService],
  exports: [RouterModule]
})
export class RoutesModule { }
