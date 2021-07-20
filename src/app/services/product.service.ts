import { Injectable } from '@angular/core';
import { products } from '../../assets/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return products;
  }
  
  getProductById(id: number) {
    return products.filter(product=>product.id == id)[0];
  }
}
