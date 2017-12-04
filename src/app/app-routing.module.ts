import { NosideLayoutComponent } from './layout/noside-layout/noside-layout.component';
import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // 包裹layout内无sidebar
  {
    path: '',
    component: NosideLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: './home/home.module#HomeModule',
      },
    ]
  },
  // 包裹layout内有sidebar
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'project', pathMatch: 'full' },
      {
        path: 'project',
        loadChildren: './home/project/project-view/project-view.module#ProjectViewModule',
      }
    ]
  },
  // 单页不包裹layout
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  // 未匹配
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
