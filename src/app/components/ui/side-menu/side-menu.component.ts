import { Component, OnInit } from '@angular/core';
import { NavigationLink } from 'src/app/models/NavigationLink';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  fullName!: string;
  hobbie!: string;
  menuState: boolean = true;
  constructor(
    private navigationLinkService: NavigationService,
    private authService: AuthService) { }

  links: NavigationLink[] = [];
  ngOnInit(): void {
    this.fullName = `${this.authService.logedUserData?.first_name} ${this.authService.logedUserData?.last_name}`
    this.hobbie = this.authService.logedUserData?.hobbie || 'Programer';
    this.authService.logedUserSub.subscribe((res: User) => {
      this.fullName = `${res.first_name} ${res.last_name}`
      this.hobbie = res.hobbie || 'Programer';
    })
    this.links = this.navigationLinkService.NavigationLinks;
  }
  closeMenu() {
    this.menuState = false;
  }
  openMenu() {
    this.menuState = true;
  }
}
