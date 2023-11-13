import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from './products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = "https://fakestoreapi.com/products"
  url2: string = "https://fakestoreapi.com/products/category"

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<IProducts[]> {
    return this.httpClient.get<IProducts[]>(this.url);
  }

  findByCategory(category: string): Observable<IProducts> {
    return this.httpClient.get<IProducts>(`${this.url2}/${category}`)
  }

  findById(id: number): Observable<IProducts> {
    return this.httpClient.get<IProducts>(`${this.url}/${id}`);
  }

  findAllByCompletedTrue(): Observable<IProducts[]> {
    return this.httpClient.get<IProducts[]>(`${this.url}?completed=true`)
  }

  findAllByCompletedFalse(): Observable<IProducts[]> {
    return this.httpClient.get<IProducts[]>(`${this.url}?completed=false`)
  }

  create(product: IProducts): Observable<IProducts>{
    return this.httpClient.post<IProducts>(this.url, product)
  }

  update(products: IProducts): Observable<IProducts>{
    return this.httpClient.put<IProducts>(`${this.url}/${products.id}`, products)
  }

  deleteById(id: number): void{
    this.httpClient.delete(`${this.url}/${id}`)
  }
}
