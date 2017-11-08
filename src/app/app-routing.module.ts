import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    //包裹layout内
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard] },
      { path: 'dashboard/todo', loadChildren: './home/todo/todo.module#TodoModule', canActivate: [AuthGuard] },
      { path: 'dashboard/project/active', loadChildren: './home/project-details/project-details.module#ProjectDetailsModule', canActivate: [AuthGuard] },
    ]
  },
  //单页不包裹layout
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  //未匹配
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
