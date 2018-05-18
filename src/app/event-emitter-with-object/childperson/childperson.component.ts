import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { IPerson } from '../person';


@Component({
  selector: 'app-childperson',
  templateUrl: './childperson.component.html',
  styleUrls: ['./childperson.component.css']
})
export class ChildpersonComponent implements OnInit {

  @Input() selectedPersons:IPerson[]=[];
  @Output() childPersonClick=new EventEmitter<IPerson>() ;

  constructor() { }

  ngOnInit() {
  }
  passToParent(person:IPerson){
    this.childPersonClick.emit(person);
  }
}
