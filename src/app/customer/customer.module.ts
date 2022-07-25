import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';
import { ContactComponent } from './page/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './page/signin/signin.component';
import { SignupComponent } from './page/signup/signup.component';
import { CartComponent } from './page/cart/cart.component';
import { DetailComponent } from './page/detail/detail.component';
import { BlogComponent } from './page/blog/blog.component';




@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    CartComponent,
    DetailComponent,
    BlogComponent,
  
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
