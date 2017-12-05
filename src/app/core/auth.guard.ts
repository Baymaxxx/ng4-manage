import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'angular-web-storage';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private local: LocalStorageService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }
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
