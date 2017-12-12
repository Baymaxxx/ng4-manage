import { TodoHomeComponent } from './todo-home/todo-home.component';
import { AuthGuard } from './../../core/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo.component';

const routes: Routes = [
  // { path: '', component: TodoHomeComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: ':filter', component: TodoComponent, canActivate: [AuthGuard], pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule { }

export const routedComponents = [TodoComponent];