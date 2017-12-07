import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.scss']
})
export class UserLogoutComponent implements OnInit {

  constructor(private router: Router,
    private local: LocalStorageService
  ) { }

  ngOnInit() {
  }
  logout() {
    this.local.remove('user');
    this.router.navigate(['/user/login']);
  }
}
