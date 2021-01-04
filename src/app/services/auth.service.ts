import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errorM = new Subject<string>();
  logedUserData: User | undefined;
  logedUserSub = new Subject<User>();
  public currentUser: Observable<User>;//?
  private currentUserSubject: BehaviorSubject<User>;//?

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('loggedUser') || '{}'));//?
    this.currentUser = this.currentUserSubject.asObservable();//?

  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(userRes: any, data: User) {
    if (userRes.token) {
      this.logedUserData = {
        email: data.email,
        password: data.password,
        first_name: data.first_name || 'Yuval',
        last_name: data.last_name || 'Krispin',
        hobbie: data.hobbie || 'Programer'
      }
      localStorage.setItem('loggedUser', JSON.stringify(this.logedUserData));
      this.logedUserSub.next(this.logedUserData)
      this.router.navigate(['home'])
      console.log('user has been loged in successfully!')
    }
  }
  logOut() {
    this.logedUserData = undefined
    console.log('user has been loged out successfully!')
    this.currentUserSubject.next(new User);
    this.router.navigate(['sign-in'])
  }
  loginAttempt(data: { email: string; password: string; }) {
    return this.http.post<any>('https://reqres.in/api/login', data).subscribe(userRes => {
      this.login(userRes, data);
    }, error => {
      this.router.navigate(['sign-in'])
      console.log(error.error.error)
      this.errorM.next(error.error.error);
    })
  }

}
