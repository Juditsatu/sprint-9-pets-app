import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  })

  constructor( 
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService
    ) { }


  login() {
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password)
      .subscribe( valid => {

        if (this.loginForm.value && valid === true) {
          this.router.navigateByUrl('/search')
            .then( () => {
              window.location.reload();
            });
        } else {
          Swal.fire('Error', valid, 'error');
        }
      })
   
  }
}
