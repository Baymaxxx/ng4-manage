import { UserLogoutComponent } from './../user/user-logout/user-logout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [UserLogoutComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserLogoutComponent
  ]
})
export class SharedModule { }
