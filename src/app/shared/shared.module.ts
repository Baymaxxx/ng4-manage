import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserLogoutComponent } from './../user/user-logout/user-logout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectStatusPipe } from './pipes/project-status.pipe';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';

const APP_MODULE = [CommonModule, FormsModule, ReactiveFormsModule, RouterModule];
@NgModule({
  imports: [
    ...APP_MODULE,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [SidebarComponent, UserLogoutComponent, ProjectStatusPipe],
  exports: [
    ...APP_MODULE,
    SidebarComponent,
    UserLogoutComponent,
    NgZorroAntdModule,
    ProjectStatusPipe
  ]
})
export class SharedModule { }
