import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NewComponent } from './order/inner-item/new/new.component';
import { DeleteComponent } from './order/inner-item/delete/delete.component';
import { GetComponent } from './order/inner-item/get/get.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    OrderComponent,
    NotFoundPageComponent,
    NewComponent,
    DeleteComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] /* First loading component in index.html file */
})
export class AppModule { }
