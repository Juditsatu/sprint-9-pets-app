import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

// interface MenuItem {
//   route: string;
//   name: string;
// }

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
    this.userIsLogged();
  }

  public isCollapsed = true;
  public isLogged = false;

  userName: string = ''

  // get user() {
  //   return this.authService.auth;
  // }
  
  userIsLogged() {
    if (localStorage.getItem('token')) {
      this.isLogged = true;
      this.userName = localStorage.getItem('user')!;
    }
  }

  logout() {
    this.isLogged = false;
    this.authService.logout();
  }

  // menuItems: MenuItem[] = [
  //   {
  //     route: '/search',
  //     name: '<i class="bi bi-search"></i> Search sitters'
  //   },
  //   {
  //     route: '/about',
  //     name: 'About'
  //   },
  //   // {
  //   //   route: '/member/login',
  //   //   name: 'Log In'
  //   // },
  //   // {
  //   //   route: '/member/signup',
  //   //   name: 'Sign Up'
  //   // }
  // ]

}
