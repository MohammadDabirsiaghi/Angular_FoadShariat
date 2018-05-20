import { Injectable } from '@angular/core';


export class LoggingService {

  constructor() { }
  logMessage(message:string){
    console.log(message);
  }
}
