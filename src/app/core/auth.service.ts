import { UserService } from './../user/user.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Auth } from './model/auth.model';

@Injectable()
export class AuthService {

  constructor(private http: Http, private userServeice: UserService) { }

  loginWithCredentials(username: string, password: string): Promise<Auth> {
     return this.userServeice.findUser(username)
      .then(user => {
        let auth = new Auth();
        localStorage.removeItem('userId');
        let redirectUrl = localStorage.getItem('redirectUrl') ? '/' : localStorage.getItem('redirectUrl');
        auth.redirectUrl = redirectUrl;
        if (user === null) {
          auth.hasError = true;
          auth.errMsg = '用户名不正确'
        } else if (password === user.password) {
          auth.user = Object.assign({}, user);
          auth.hasError = false;
          localStorage.setItem('userId', String(user.id));
        } else {
          auth.hasError = true;
          auth.errMsg = '密码不正确'
        }
        return auth as Auth;
      })

  }
}
