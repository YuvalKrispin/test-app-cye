import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  islogedin: boolean = false
  logedUserData: User | undefined;
  constructor(private http: HttpClient, private router: Router) {

  }
  login(userRes: any, data: { email: string; password: string; }) {
    if (userRes.token) {
      this.islogedin = true;
      this.logedUserData = { email: data.email, password: data.password }
      this.router.navigate(['home'])
      console.log('user has been loged in successfully!')
    }
  }
  logOut() {
    this.islogedin = false
    this.logedUserData = undefined
    console.log('user has been loged out successfully!')
    this.router.navigate(['sign-in'])
  }
  loginAttempt(data: { email: string; password: string; }) {
    return this.http.post<any>('https://reqres.in/api/login', data).subscribe(userRes => {
      this.login(userRes, data);
    }, error => {
      this.router.navigate(['sign-in'])
      console.log(error.error.error)
    })
  }

}
