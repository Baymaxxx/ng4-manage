import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserLogoutComponent } from './../user/user-logout/user-logout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ProjectStatusPipe } from './pipes/project-status.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule.forRoot()        
  ],
  declarations: [UserLogoutComponent, ProjectStatusPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserLogoutComponent,
    RouterModule,
    NgZorroAntdModule,
    ProjectStatusPipe
  ]
})
export class SharedModule { }
