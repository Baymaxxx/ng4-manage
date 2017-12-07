import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { LocalStorageService } from 'angular-web-storage';
import { Auth } from '../../../core/model/auth.model';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  validateForm: FormGroup;
  auth: Auth;
  submitted: boolean;
  constructor(private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private local: LocalStorageService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
  inputChange(): void {
    this.submitted = false;
  }
  _submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
      }
    }
    const formValue = this.validateForm.value;
    console.log(this.validateForm.controls);

    this.authService.loginWithCredentials(formValue.userName, formValue.password)
      .then(auth => {
        console.log(auth);
        const redirectUrl = (auth.redirectUrl === null) ? '/' : auth.redirectUrl;
        if (!auth.hasError) {
          this.router.navigate([redirectUrl]);
          this.local.remove('redirectUrl');
        } else {
          this.auth = Object.assign({}, auth);
        }
      });
    this.submitted = true;
  }
}
