import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName: string = ''
  
  userIsLogged() {
    if (localStorage.getItem('token')) {
      this.userName = localStorage.getItem('user')!;
    }
  }

}
