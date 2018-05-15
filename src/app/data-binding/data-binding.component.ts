import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  age:number=36;
  name:string="ali";

  allowClick=false;

  btnClick="This Button Not Clicked";
  lastName:string;
  getName(){
    return this.name;
  }
  onButtonClick(){
    this.btnClick="This Button Clicked";
  }
  constructor() { 

    setTimeout(() => {
      this.allowClick=true;
    }, 3000);
  }

  onInputChange(event:Event){
    console.log(event);
    this.lastName=(<HTMLInputElement>event.target).value;
  }
  ngOnInit() {
  }

}
