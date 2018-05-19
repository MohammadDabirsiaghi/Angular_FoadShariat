import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-access-element',
  templateUrl: './access-element.component.html',
  styleUrls: ['./access-element.component.css']
})
export class AccessElementComponent implements OnInit {

  firstName:string="";
  age:number;
  @ViewChild('txtAge') txtAge:ElementRef
  constructor() { }

  ngOnInit() {
  }
  ChangeName(element:HTMLInputElement){
    this.firstName=element.value;
  }
  ChangeAge(){
    this.age=this.txtAge.nativeElement.value;
  }
}
