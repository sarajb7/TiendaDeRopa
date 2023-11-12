import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsDetailComponent,
    ProductsFormComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [
  ]
})
export class ProductsModule { }
