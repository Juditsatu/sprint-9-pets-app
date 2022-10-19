import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
[x: string]: any;

  constructor( private fb: FormBuilder ) { }

  @Output() formValue = new EventEmitter<FormGroup>();

  price: number = 50;

  myForm: FormGroup = this.fb.group({
    serviceType: ['houseSitting', Validators.required],
    petNumber: ['1', Validators.required],
    catChecked: [true, Validators.required],
    dogChecked: [false, Validators.required],
    priceRange: [50, Validators.required]
  })
  
  
  applyFilters() {
    this.formValue.emit(this.myForm.value);
  }

}
