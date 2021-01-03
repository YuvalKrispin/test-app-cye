import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../login/login.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'userName': new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, Validators.required),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });
  }
  onSubmit() {
    console.log(this.signupForm)
  }
  onAddHobby(){
    (<FormArray>this.signupForm.get('hobbies')).push(new FormControl(null, Validators.required))
  }
}
