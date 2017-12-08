import { LocalStorageService } from 'angular-web-storage';
import { UserService } from './../user.service';
import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user: User;
  constructor(
    private local: LocalStorageService
  ) {
    this.user = this.local.get('user');
  }

  ngOnInit() {
  }
}
