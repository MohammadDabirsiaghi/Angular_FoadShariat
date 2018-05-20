import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { AccountsService } from '../accounts.service';
import{IAccount}from "../account";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
  providers:[]
})
export class AddAccountComponent implements OnInit {
  @ViewChild('name') txtName:ElementRef;
  @ViewChild('password') txtPassword:ElementRef;
  constructor(private accountService:AccountsService) { }

  ngOnInit() {
  }
  addNewAccount(){
    let a:IAccount={name:this.txtName.nativeElement.value,password:this.txtPassword.nativeElement.value};
    this.accountService.addAccount(a);
  }
}
