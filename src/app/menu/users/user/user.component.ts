import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersListService } from 'src/app/users-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userid: number = 1;
  user?: User;
  constructor(private route: ActivatedRoute, private ulService: UsersListService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userid = +params['id'];
      this.user = this.ulService.users[+params['id'] - 1]
    })
  }

}
