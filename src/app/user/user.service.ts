import { User } from './model/user.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  api_url: string;
  constructor(private http:Http) { 
    this.api_url = 'https://www.easy-mock.com/mock/595af9579adc231f357033a7/niceFish/user';
  }
  
  findUser(username: string): Promise<User> {
    return this.http.get(`${this.api_url}`)
      .toPromise()
      .then((res) => {
        console.log(res.json());
        let users = res.json().users as User[];
        users = users.filter((item) => item.username === username);
        return users.length > 0?users[0]:null;
      })
  }
}
