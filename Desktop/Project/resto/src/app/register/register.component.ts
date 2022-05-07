import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup } from '@angular/forms'
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  registeruser(){
    this.resto.registerUser(this.register.value).subscribe((result:any)=>{
      console.log(result)
      this.register.reset()
    })
  }

}
