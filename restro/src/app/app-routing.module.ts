import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component' ;
import {ListRestoComponent} from './list-resto/list-resto.component' ;
import {LoginRestoComponent} from './login-resto/login-resto.component';
import {RegisterRestoComponent} from './register-resto/register-resto.component';
import {UpdateRestoComponent} from './update-resto/update-resto.component';

const routes: Routes = [
  {
    path:"Add" ,component:AddRestoComponent 
  },
  {
    path:"login" ,component:LoginRestoComponent 
  },
  {
    path:"register" ,component:RegisterRestoComponent 
  },
  {
    path:"update/:id" ,component:UpdateRestoComponent 
  },
  {
    path:"List" ,component:ListRestoComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
