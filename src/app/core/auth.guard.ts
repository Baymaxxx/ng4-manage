import { ProjectConfigComponent } from './../routes/project/project-config/project-config.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'angular-web-storage';
import { NzModalService } from 'ng-zorro-antd';
import { AuthleaveComponent } from '../shared/components/authleave/authleave.component';

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<AuthleaveComponent> {
  constructor(private router: Router,
    private local: LocalStorageService,
    private comfirmSrv: NzModalService
  ) { }
  // 路由进入
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }
  // 路由离开
  canDeactivate(
    component: AuthleaveComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return component.leave ? component.leave() : true;
  }
  // 检查登录
  checkLogin(url: string): boolean {
    if (this.local.get('user') !== null) {
      return true;
    } else {
      this.local.set('redirectUrl', url);
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
