import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { IProducts } from '../products.model';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

    product: IProducts | undefined;
    
    constructor(private productsService: ProductsService,
                private activatedRoute: ActivatedRoute ) {}

 ngOnInit(): void {
  this.activatedRoute.params.subscribe(params => {
    const id = parseInt(params['id'], 10);
  this.productsService.findById(id).subscribe(data =>
  this.product = data);
  });
  }
}
