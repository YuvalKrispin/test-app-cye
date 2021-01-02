import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  islogedin: boolean = false
  logedUserData: User | undefined;
  constructor(private http: HttpClient, private router:Router) {

  }
  loginAttempt(data: { email: string; password: string; }) {

    return this.http.post<any>('https://reqres.in/api/login', data).subscribe(userRes => {
      if(userRes.token){
        this.islogedin = true;
        this.logedUserData = {email:data.email, password:data.password}
        this.router.navigate(['home'])
        console.log('user has been loged in successfully!')
      } 
    }, error => {
      this.router.navigate(['sign-in'])
      console.log( error.error.error)})
  }
}
