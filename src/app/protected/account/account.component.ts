import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  constructor( private fb: FormBuilder, private http: HttpClient ) {
    this.userForm
   }

  userForm: FormGroup = this.fb.group({
    name: ['Test 1', Validators.required],
    lastName: ['Doe', Validators.required],
    email: ['test1@test.com', [Validators.required, Validators.email]],
    phoneNumber: ['680 89 36 12', Validators.required],
    address: ['Carrer de Roc Boronat, 117, 127', Validators.required],
    zipCode: ['08018', Validators.required],
    city: ['Barcelona', Validators.required]
  })

  uploadFile(event: any) {
    // const file = (event.target as HTMLInputElement).files[0];
    // this.userForm.patchValue({
    //   imgUrl: file,
    // });
    // this.userForm.get('imgUrl').updateValueAndValidity();
  }
  
  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
    } else {
      Swal.fire('Error', 'Invalid form');
    }
    // let formData: any = new FormData();

    // formData.append('name', this.userForm.get('name')?.value);
    // formData.append('email', this.userForm.get('email')?.value);
    // formData.append('address', this.userForm.get('address')?.value);
    // formData.append('zipCode', this.userForm.get('zipCode')?.value);
    // formData.append('city', this.userForm.get('city')?.value);


  }

}
