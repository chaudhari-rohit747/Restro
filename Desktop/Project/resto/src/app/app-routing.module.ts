import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';

const routes: Routes = [
  {
    path:"login", component:LoginComponent
  },
  {
    path:"list", component:ListRestoComponent
  },
  {
    path:"register", component:RegisterComponent
  },
  {
    path:"add", component:AddRestoComponent
  },
  {
    path:"update/:id", component:UpdateRestoComponent
  },
  {
    path:"", redirectTo:'list' ,pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
