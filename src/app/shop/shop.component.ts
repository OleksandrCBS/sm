import { Component } from '@angular/core';
import { ShopDataService } from './shop-data.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  products:any;
  categories:any;

  constructor(private data:ShopDataService){

  }

  ngOnInit(){
    this.data.getProducts().subscribe(res =>{ console.log(res); this.products = res});

    this.data.getCategories().subscribe(res=>{console.log(res); this.categories = res});

    this.data.getCarts().subscribe(res=>{console.log(res)})
  }


}
