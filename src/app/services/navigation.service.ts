import { Injectable } from '@angular/core';
import { NavigationLink } from '../models/NavigationLink';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  NavigationLinks: NavigationLink[] = [
    { path: '/home', text: 'Dashboard', icon: 'dashboard', disabled: false },
    { path: '/files', text: 'Files', icon: 'insert_drive_file', disabled: true },
    { path: '/news', text: 'News', icon: 'receipt_long', disabled: true },
    { path: '/home/users', text: 'Users', icon: 'group', disabled: false },
    { path: '/FAQ', text: 'FAQ', icon: 'contact_support', disabled: true },
    { path: '/help', text: 'Help', icon: 'support', disabled: true },
    { path: '/settings', text: 'Settings', icon: 'settings', disabled: true },
  ];
  constructor() {
  }
}
