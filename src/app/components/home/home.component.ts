import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    
    this.getProductData();

  }

  getProductData(){
    this.productService.getProducts().subscribe(res =>{
    this.products = res;
    console.log(res);
    });
  }

}
