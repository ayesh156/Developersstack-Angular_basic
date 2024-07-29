import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NewComponent } from './order/inner-item/new/new.component';
import { DeleteComponent } from './order/inner-item/delete/delete.component';
import { GetComponent } from './order/inner-item/get/get.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'customer/:data',component:CustomerComponent},
  {path:'order',component:OrderComponent, children: [
    {path:'',redirectTo:'/order/new', pathMatch:'full'},
    {path:'new',component:NewComponent},
    {path:'delete',component:DeleteComponent},
    {path:'get',component:GetComponent},
  ]},
  {path:'**',component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
