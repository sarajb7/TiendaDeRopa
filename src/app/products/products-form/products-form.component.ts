import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent {

  constructor(
    
    private router: Router,
    ) {}
}
