import { ProjectModule } from './project/project.module';
import { ProjectComponent } from './project/project.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AuthGuard } from './../core/auth.guard';
import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'project', pathMatch: 'full' },
  {
    path: 'project',
    loadChildren: './project/project.module#ProjectModule',
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'todo',
    loadChildren: './todo/todo.module#TodoModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
