import { ProjectModule } from './project/project.module';
import { ProjectComponent } from './project/project.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AuthGuard } from './../core/auth.guard';
import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosideLayoutComponent } from '../layout/noside-layout/noside-layout.component';
import { LayoutComponent } from '../layout/layout.component';

export const routes = [
  // 包裹layout内无sidebar
  {
    path: '',
    component: NosideLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard/project', pathMatch: 'full' },
      {
        path: 'dashboard/project',
        loadChildren: './project/project.module#ProjectModule',
      },
      {
        path: 'dashboard/rooms',
        component: RoomsComponent
      },
      {
        path: 'dashboard/todo',
        loadChildren: './todo/todo.module#TodoModule',
      },
    ]
  },
  // 包裹layout内有sidebar
  {
    path: 'project',
    component: LayoutComponent,
    children: [{
      path: '',
      loadChildren: './project/project-view/project-view.module#ProjectViewModule',
    }]
  },
  // 单页不包裹layout
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  // 未匹配
  {
    path: '**',
    redirectTo: 'dashboard/project',
    pathMatch: 'full'
  },
];
