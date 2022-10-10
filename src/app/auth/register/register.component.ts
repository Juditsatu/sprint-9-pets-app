import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  signupForm: FormGroup = this.fb.group({
    name: ['Test 1', [Validators.required]],
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  })

  constructor( 
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService 
    ) { }

  signup() {
    const { name, email, password } = this.signupForm.value;
    
    this.authService.register(name, email, password)
      .subscribe( valid => {

        console.log(valid)

        if (valid === true) {
          this.router.navigateByUrl('/dashboard');
        } else {
          // Swal.fire('Error', valid, 'error');
        }
      })
  }

}
