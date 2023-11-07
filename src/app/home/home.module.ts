import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from '../products/products-list/products-list.component';
import { ProductsCategoriesComponent } from '../products/products-categories/products-categories.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsCategoriesComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsListComponent,
    ProductsCategoriesComponent,
    UsersComponent
  ]
})
export class HomeModule { }
