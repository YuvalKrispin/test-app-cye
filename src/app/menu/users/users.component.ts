import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersListService } from 'src/app/users-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  openModal: boolean = false;

  constructor(private ulService: UsersListService, public router: Router) { }
  usersList: User[] = []
  ngOnInit(): void {
    this.usersList = this.ulService.getUsers();
    this.ulService.featureSelected.subscribe((users: User[]) => this.usersList = users)
  }
  onClick() {
    this.openModal = true;
  }
  closeModal() {
    this.openModal = false
    this.router.navigate(['/home/users'])
  }
  onSubmit(form: NgForm) {
    console.log('submitted')
    this.ulService.addUser(form.form.value)
  }
}
