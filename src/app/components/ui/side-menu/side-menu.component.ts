import { Component, OnInit } from '@angular/core';
import { NavigationLink } from 'src/app/models/NavigationLink';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  menuState: boolean = true;
  constructor(private navigationLinkService: NavigationService) { }
  links: NavigationLink[] = [];
  ngOnInit(): void {
    this.links = this.navigationLinkService.NavigationLinks;
  }
  closeMenu() {
    this.menuState = false;
  }
  openMenu(){
    this.menuState = true;
  }
}
