import { Component, OnInit } from '@angular/core';
import { IPerson } from './person';
import { empty } from 'rxjs';

@Component({
  selector: 'app-event-emitter-with-object',
  templateUrl: './event-emitter-with-object.component.html',
  styleUrls: ['./event-emitter-with-object.component.css']
})
export class EventEmitterWithObjectComponent implements OnInit {
  persons:IPerson[]=[];
  selectedPersons:IPerson[]=[];
  selectedChildPerson:IPerson;
  constructor() {
   }

  ngOnInit() {
    this.persons.push({name:'ali',age:34,school:'school1'});
    this.persons.push({name:'mohamamd',age:12,school:'school2'});
    this.persons.push({name:'alireza',age:20,school:'school3'});
    this.persons.push({name:'hosein',age:16,school:'school4'});
  }
  addPerson(person:IPerson){
    this.selectedPersons.push(person);
  }
  childPersonClick(person:IPerson){
    this.selectedChildPerson=person;
  }
}
