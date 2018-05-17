import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  colorCode:number;
  isButtonClicked:boolean=false;
  constructor() { 
    this.colorCode=Math.random();
  }


  getColor()
  {
    return this.colorCode>0.5?'red':'green';
  }
  onButtonClick(event:Event){
    this.isButtonClicked=true;
  }
  ngOnInit() {
  }
  btnAddArray(event:Event){
  this.tests.push('Test');
}
  tests=['test1','test2'];

}
