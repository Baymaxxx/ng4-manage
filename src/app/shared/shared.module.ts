import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserLogoutComponent } from './../user/user-logout/user-logout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule.forRoot()        
  ],
  declarations: [UserLogoutComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserLogoutComponent,
    RouterModule,
    NgZorroAntdModule
  ]
})
export class SharedModule { }
