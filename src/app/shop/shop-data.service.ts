import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShopDataService {

  constructor(private http:HttpClient) { }


  getProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  getCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

  getCarts(){
    return this.http.get('https://fakestoreapi.com/carts')
  }
}
