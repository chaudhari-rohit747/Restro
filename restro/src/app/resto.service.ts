import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestoService {
  static saveResto(value: any) {
    throw new Error('Method not implemented.');
  }
url="http://localhost:3000/restaurant";
Rooturl="http://localhost:3000/";
  constructor(private http:HttpClient) { }
  getlist(){
   return this.http.get(this.url)
  }
  saveResto(_data:any){
   // console.log(_data)
   return this.http.post(this.url,_data)
  }
  deleteResto(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentResto(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  updateResto(id: any,data: any){
    return this.http.put(`${this.url}/${id}`,data)
  }
  registerUser(data:any){
    return this.http.post(this.Rooturl+"users",data)
  }
}
