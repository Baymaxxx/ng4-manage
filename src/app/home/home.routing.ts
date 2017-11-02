import { ProjectModule } from './project/project.module';
import { ProjectComponent } from './project/project.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AuthGuard } from './../core/auth.guard';
import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: 'project',  pathMatch:'full' },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'project',
    loadChildren: './project/project.module#ProjectModule',
  },
  {
    path: 'todo',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
