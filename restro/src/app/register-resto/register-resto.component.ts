import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-register-resto',
  templateUrl: './register-resto.component.html',
  styleUrls: ['./register-resto.component.css']
})
export class RegisterRestoComponent implements OnInit {
  regResto = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  constructor(private rac:RestoService) { }
  alert:boolean=false
  ngOnInit(): void {
  }
  colleResto(){
    console.log(this.regResto.value)
    this.rac.registerUser(this.regResto.value).subscribe((result)=>{
      this.alert=true
      console.log(result)
    })
    this.regResto.reset({})
  }
  Close(){
    this.alert=false
  }
}
