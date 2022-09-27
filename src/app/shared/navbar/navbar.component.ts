import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  name: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public isCollapsed = true;

  menuItems: MenuItem[] = [
    {
      route: '/search',
      name: 'Search sitters'
    },
    {
      route: '/',
      name: 'About'
    },
  ]

}
