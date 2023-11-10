import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from '../products/products-list/products-list.component';
import { UsersFormComponent } from '../users/users-form/users-form.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    UsersFormComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsListComponent,
    UsersFormComponent
  ]
})
export class HomeModule { }
