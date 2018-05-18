import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  products=["product1","product2","product3"];
  selectedProducts=[];
  childSeelctedProduct="";
  addToCart(product:string){
    this.selectedProducts.push(product);
  }
  constructor() { }

  ngOnInit() {
  }
  childProductClick(event:string){
    this.childSeelctedProduct=event;
  }
}
