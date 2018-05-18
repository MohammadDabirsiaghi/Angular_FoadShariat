import { Component, OnInit,Input, OnChanges, SimpleChanges, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  @Output() productClickedParent=new EventEmitter<string>();
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  @Input('selectedProducts1') selectedProducts=[];
  constructor() { }

  ngOnInit() {
  }
  productClicked(product:string){
    alert(product);
    this.productClickedParent.emit(product);
  }
}
