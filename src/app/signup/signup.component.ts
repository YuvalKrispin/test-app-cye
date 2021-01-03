import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../login/login.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'userName': new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, Validators.required),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([new FormControl(null, Validators.required)])
    });
  }
  onSubmit() {
    const data: User = { 
      email: this.signupForm.get('email')?.value, 
      password: this.signupForm.get('password')?.value,
      first_name: this.signupForm.get('userName.firstName')?.value,
      last_name: this.signupForm.get('userName.lastName')?.value,
      hobbie: this.signupForm.get('hobbies')?.value[0],
   }
    return this.http.post<any>('https://reqres.in/api/register', data).subscribe(userRes => {
      this.authService.login(userRes,data);
    }, error => {
      this.router.navigate(['sign-in'])
      console.log(error.error.error)
    })
  }
  onAddHobby() {
    (<FormArray>this.signupForm.get('hobbies')).push(new FormControl(null, Validators.required))
  }
  getControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
}