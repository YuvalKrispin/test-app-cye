import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersListService } from 'src/app/users-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  openModal: boolean = false;
  constructor(private ulService: UsersListService) { }
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
  }
}
