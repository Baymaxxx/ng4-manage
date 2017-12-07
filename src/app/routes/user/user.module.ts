import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserRoutingModule } from './user.routing';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [UserLoginComponent, UserRegisterComponent, ForgetPwdComponent, UserInfoComponent],
  providers: [UserService]
})
export class UserModule { }
