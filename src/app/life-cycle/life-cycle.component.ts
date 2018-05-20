import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,OnChanges {
  message:string="";
  message2:string="";
  ngOnChanges(changes: SimpleChanges): void {
    this.result+="<p>ngOnChanges Event</p>";
  }
  result:string="";
  constructor() {
    this.result+="<p>Constructor Event</p>";
   }

  ngOnInit() {
    this.result+="<p>ngOnInit Event</p>";
  }

}
