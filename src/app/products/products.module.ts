import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCategoriesComponent } from './products-categories/products-categories.component';




@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsCategoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsListComponent,
    ProductsCategoriesComponent
  ]
})
export class ProductsModule { }
