import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router} from '@angular/router';
import { IProducts } from '../products.model';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit{

  productForm = new FormGroup({
    id: new FormGroup<number>(0),
    image: new FormGroup<string>(''),
    title: new FormGroup<string>(''),
    price: new FormGroup<number>(0),
    description: new FormGroup<string>(''),
    category: new FormGroup<string>(''),
  });


  constructor( 
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idString = params['id'];

      if (!idString) return;
      const id = parseInt(idString, 10);
      this.productsService.findById(id).subscribe(product => this.loadProductForm(product));
    });
  }

  loadProductForm(product: IProducts): void {

    this.productForm.reset({
    id: product.id,
    image: product.image,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    })
  }

  save(): void {
    console.log('probandoo')
   
      let id = this.productForm.get('id')?.value ?? 0;
    let image = this.productForm.get('image')?.value ?? '';
    let title = this.productForm.get('title')?.value ?? '';
    let price = this.productForm.get('price')?.value ?? 0;
    let description = this.productForm.get('description')?.value ?? '';
    let category = this.productForm.get('category')?.value ?? '';

    let product: IProducts = {
      id: id,
      image: image,
      title: title,
      price: price,
      description: description,
      category: category,
    }

    this.productsService.create(product).subscribe((product) => {
      console.log('Producto creado', product);
      
    });
      this.router.navigate(["/home"])
  }
}
