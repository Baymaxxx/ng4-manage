import { UserService } from './../routes/user/user.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Auth } from './model/auth.model';
import { LocalStorageService } from 'angular-web-storage';

@Injectable()
export class AuthService {

  constructor(private http: Http,
     private userServeice: UserService,
     private local: LocalStorageService
    ) { }

  loginWithCredentials(username: string, password: string): Promise<Auth> {
    return this.userServeice.findUser(username)
      .then(user => {
        const auth = new Auth();
        this.local.remove('user');
        const redirectUrl = this.local.get('redirectUrl') ? '/' : this.local.get('redirectUrl');
        auth.redirectUrl = redirectUrl;
        if (user === null) {
          auth.hasError = true;
          auth.errMsg = '用户名不正确';
        } else if (password === user.password) {
          auth.user = Object.assign({}, user);
          auth.hasError = false;
          this.local.set('user', user);
        } else {
          auth.hasError = true;
          auth.errMsg = '密码不正确';
        }
        return auth as Auth;
      });

  }
}
