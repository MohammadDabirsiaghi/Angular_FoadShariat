import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  absent:boolean=true;
  names=['foad','hosein','mohamamd'];
  score=200;
  constructor() { }

  ngOnInit() {
  }
  Toggle(){
    this.absent=!this.absent;
  }
}
