import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  httpcall: any;
  constructor(private http: HttpClient , private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log('submitted')
    this.authService.loginAttempt(form.form.value)
  }
}
