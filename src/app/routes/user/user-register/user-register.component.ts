import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  validateForm: FormGroup;
  
    _submitForm() {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
      }
    }
  
    constructor(private fb: FormBuilder) {
    }
  
    updateConfirmValidator() {
      /** wait for refresh value */
      setTimeout(_ => {
        this.validateForm.controls[ 'checkPassword' ].updateValueAndValidity();
      });
    }
  
    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
      if (!control.value) {
        return { required: true };
      } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
        return { confirm: true, error: true };
      }
    };
  
    getCaptcha(e: MouseEvent) {
      e.preventDefault();
    }
  
    ngOnInit() {
      this.validateForm = this.fb.group({
        email            : [ null, [ Validators.email ] ],
        password         : [ null, [ Validators.required ] ],
        checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
        nickname         : [ null, [ Validators.required ] ],
        phoneNumberPrefix: [ '+86' ],
        phoneNumber      : [ null, [ Validators.required ] ],
        website          : [ null, [ Validators.required ] ],
        captcha          : [ null, [ Validators.required ] ],
        agree            : [ false ]
      });
    }
  
    getFormControl(name) {
      return this.validateForm.controls[ name ];
    }
  }
