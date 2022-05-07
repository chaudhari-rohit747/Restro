import { Component, OnInit, ViewChild } from '@angular/core';

import {RestoService} from '../resto.service'

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  list:any=[]
  dataSource: any;
  
  constructor(private resto:RestoService) { }
  
  ngOnInit(): void {
   
    this.resto.getList().subscribe((result)=>{
      console.log(result);
      this.list=result
    })
   
  }

  deleteResto(item:any){
    this.list.splice(item-1,1)
    this.resto.deleteResto(item).subscribe((result)=>{
      console.log('result',result)
    })
  }

}
