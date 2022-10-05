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
      name: '<i class="bi bi-search"></i> Search sitters'
    },
    {
      route: '/',
      name: 'About'
    },
    {
      route: '/account/signup',
      name: 'Sign Up'
    },
    {
      route: '/account/signin',
      name: 'Sign In'
    },
  ]

}
