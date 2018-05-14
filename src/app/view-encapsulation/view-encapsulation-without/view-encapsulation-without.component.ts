import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-without',
  templateUrl: './view-encapsulation-without.component.html',
  styleUrls: ['./view-encapsulation-without.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ViewEncapsulationWithoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
