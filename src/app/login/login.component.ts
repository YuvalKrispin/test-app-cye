import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  httpcall: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.httpcall = this.getHttpRequest();
    console.log(this.httpcall)
  }
  getHttpRequest() {
    return this.http.get<{ name: string }>('https://reqres.in/api/register')
  }
}
