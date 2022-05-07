import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RestoService } from '../resto.service';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css'],
})
export class AddRestoComponent implements OnInit {
  alert: boolean = false;
  addResto = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
  });
  // the below code is required for applying validation at html file
  // like email.touched && email.invalid
  get name() {return this.addResto.get('name')}
  get email() {return this.addResto.get('email')}
  get address() {return this.addResto.get('address')}
  constructor(private Resto: RestoService) {}

  ngOnInit(): void {}
  collectResto() {
    // console.log(this.addResto.value);
    this.Resto.saveResto(this.addResto.value).subscribe((result) => {
      console.log('Data added ...', result);
      this.addResto.reset();
    });
    this.alert = true;
  }
  closealert() {
    this.alert = false;
  }
}
