import { Router } from '@angular/router';
import { Auth } from './../../core/model/auth.model';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  username: string;
  password: string;
  auth: Auth;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  onSubmit(): void {
    this.authService.loginWithCredentials(this.username, this.password)
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
  }
}
