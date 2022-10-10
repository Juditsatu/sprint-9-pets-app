import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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
    // this.authService.validateToken()
    //   .subscribe( res => console.log (res) )
    // console.log(this.myForm.value);
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password)
      .subscribe( valid => {

        console.log(valid)

        if (valid === true) {
          this.router.navigateByUrl('/');
        } else {
          // Swal.fire('Error', valid, 'error');
        }
      })
   
    this.router.navigateByUrl('/');
  }
}
