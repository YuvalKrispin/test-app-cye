import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  featureSelected = new Subject<User[]>();
  users: User[] = []
  constructor(private http: HttpClient, private router: Router) {
    this.http.get<any>('https://reqres.in/api/users/').subscribe(userRes => { this.users = userRes.data; this.featureSelected.next(this.users) }, (err: any) => { console.log(err.error.error) })
  }
  getUsers() {
    return this.users;
  }
  addUser(newUser: User){
    let user = new User;
    user = newUser;
    user.id = this.users.length + 1;
    this.users.push(user)
  }
}
