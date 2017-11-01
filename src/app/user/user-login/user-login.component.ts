import { Router } from '@angular/router';
import { Auth } from './../../core/model/auth.model';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

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
    private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }
  inputChange(): void {
    this.submitted = false;
  }
  _submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    let formValue = this.validateForm.value;
    console.log(this.validateForm.controls);
    
    this.authService.loginWithCredentials(formValue.userName, formValue.password)
      .then(auth => {
        console.log(auth);
        let redirectUrl = (auth.redirectUrl === null) ? '/' : auth.redirectUrl;
        if (!auth.hasError) {
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirectUrl');
        } else {
          this.auth = Object.assign({},auth);
        }
      })
    this.submitted = true;
  }
}
