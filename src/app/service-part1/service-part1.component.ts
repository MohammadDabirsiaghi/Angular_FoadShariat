import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { AccountsService } from './accounts.service';
import { IAccount } from './account';
@Component({
  selector: 'app-service-part1',
  templateUrl: './service-part1.component.html',
  styleUrls: ['./service-part1.component.css'],
  providers:[LoggingService]
})
export class ServicePart1Component implements OnInit {
  accounts:IAccount[]=[];
  constructor(private logService:LoggingService,private accountService:AccountsService) { }

  ngOnInit() {
    // const logService=new LoggingService();
    // logService.logMessage("ali");
    this.accounts=this.accountService.accounts;
    this.logService.logMessage("ali");
  }

}
