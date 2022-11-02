import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router, ) { }

  ngOnInit(): void {
    this.userIsLogged();
  }

  public isLogged = false;

  userIsLogged() {
    if (localStorage.getItem('token')) {
      this.isLogged = true;
    }
  }

  goToUrl() {
    if (this.isLogged) {
      this.router.navigateByUrl('/account')
    } else {
      this.router.navigateByUrl('/member/signup')
    }
  }

}
