import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';

import { ViewEncapsulationWithComponent } from './view-encapsulation/view-encapsulation-with/view-encapsulation-with.component';
import { ViewEncapsulationWithoutComponent } from './view-encapsulation/view-encapsulation-without/view-encapsulation-without.component';
const appRoutes:Routes=[
  {path:'ViewEncapsulation',component:ViewEncapsulationComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ViewEncapsulationComponent,
    ViewEncapsulationWithComponent,
    ViewEncapsulationWithoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
