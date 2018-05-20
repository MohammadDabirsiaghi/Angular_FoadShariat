import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-life-cycle',
  templateUrl: './child-life-cycle.component.html',
  styleUrls: ['./child-life-cycle.component.css']
})
export class ChildLifeCycleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
