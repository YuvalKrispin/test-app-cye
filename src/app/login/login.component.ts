import { NullTemplateVisitor } from '@angular/compiler';
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
  errorM: string | undefined
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.errorM.subscribe((err: string) => { this.errorM = err })

  }

  onSubmit(form: NgForm) {
    console.log('submitted')
    this.authService.loginAttempt(form.form.value)
  }
}
