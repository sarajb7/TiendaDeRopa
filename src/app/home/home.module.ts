import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from '../products/products-list/products-list.component';
import { ProductsCategoriesComponent } from '../products/products-categories/products-categories.component';
import { UsersFormComponent } from '../users/users-form/users-form.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsCategoriesComponent,
    UsersFormComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsListComponent,
    ProductsCategoriesComponent,
    UsersFormComponent
  ]
})
export class HomeModule { }
