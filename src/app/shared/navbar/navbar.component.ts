import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // navbarOpen = false;
  public isCollapsed = true;

  // toggleNavbar() {
  //   this.navbarOpen = !this.navbarOpen;
  // }

}
