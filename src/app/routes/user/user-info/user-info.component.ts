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
  username: string;
  password: string;
  userId: number;
  constructor(private userService: UserService) {
    this.userId = Number(localStorage.getItem('userId'));
  }

  ngOnInit() {
    this.userService.findUser(this.userId)
      .then(user => {
        this.user = user;
        let { id, username, password } = this.user;
        this.username = username;
        this.password = password;
      });
  }
}
