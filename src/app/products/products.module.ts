import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCategoriesComponent } from './products-categories/products-categories.component';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsCategoriesComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [
    ProductsListComponent,
    ProductsCategoriesComponent,

  ]
})
export class ProductsModule { }
