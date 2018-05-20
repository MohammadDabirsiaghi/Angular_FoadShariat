import { Injectable } from '@angular/core';
import { IAccount } from './account';


// @Injectable({
//   providedIn: 'root'
// })
export class AccountsService {
  accounts:IAccount[]=[
    {name:"admin",password:"456"},
    {name:"nader",password:"123"}
  ]
  constructor() { }
  addAccount(account:IAccount){
    this.accounts.push(account);
  }
}
