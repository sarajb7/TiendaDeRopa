import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { IProducts } from '../products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{

  products: IProducts[] = [];

  constructor( private productService: ProductsService) {}

  ngOnInit(): void {
    this.findAll();

  }

  findAll(): void {
    this.productService.findAll().subscribe(data =>{
      this.products = data;
    })
  }

  hideDescription(product: IProducts): void {
    product.showDescription = !product.showDescription;
  }

}
