import { Component, OnInit } from '@angular/core';
import { IProducts } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.css']
})
export class ProductsCategoriesComponent implements OnInit {

  products: IProducts[] = [];

  constructor( private productService: ProductsService) {}


  ngOnInit(): void {
    this.findByCategory();
  }

  findByCategory(): void {
    this.productService.findAll().subscribe(data =>{
      this.products = data;
    })
  }


}
