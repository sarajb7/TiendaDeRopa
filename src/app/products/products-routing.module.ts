import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';

const routes: Routes = [
  {
    path: 'new',
    component: ProductsFormComponent
  },
  {
    path: ':id',
    component: ProductsDetailComponent
  }
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductsRoutingModule { }
