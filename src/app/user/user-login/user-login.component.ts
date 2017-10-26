import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  username: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(): void{
    console.log(this.username, this.password);
  }
}
