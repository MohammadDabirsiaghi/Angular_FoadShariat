import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';

import { ViewEncapsulationWithComponent } from './view-encapsulation/view-encapsulation-with/view-encapsulation-with.component';
import { ViewEncapsulationWithoutComponent } from './view-encapsulation/view-encapsulation-without/view-encapsulation-without.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SelectorComponentComponent } from './selector-component/selector-component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildComponent } from './Input-Output/child/child.component';
import { EventEmitterWithObjectComponent } from './event-emitter-with-object/event-emitter-with-object.component';
import { ChildpersonComponent } from './event-emitter-with-object/childperson/childperson.component';
import { AccessElementComponent } from './access-element/access-element.component';
import { NgContentDirectiveComponent } from './access-element/ng-content-directive/ng-content-directive.component';
import { CommentSampleComponent } from './comment-sample/comment-sample.component';

import { StarRatingComponent } from './comment-sample/star-rating/star-rating.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ChildLifeCycleComponent } from './life-cycle/child-life-cycle/child-life-cycle.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { BasicHighlightDirective } from './custom-directive/basic-highlight.directive';
import { AdvanceHightlightDirective } from './custom-directive/advance-hightlight.directive';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { UnlessDirective } from './Structural-Directive/unless.directive';
import { ServicePart1Component } from './service-part1/service-part1.component';
import { AddAccountComponent } from './Service-Part1/add-account/add-account.component';

import { AccountsService } from './Service-Part1/accounts.service';
const appRoutes:Routes=[
  {path:'FirstComponent',component:FirstComponentComponent},
    {path:'SelectorComponent',component:SelectorComponentComponent},
    {path:'DataBinding',component:DataBindingComponent},
    {path:'Directives',component:DirectivesComponent},
    {path:'InputOutput',component:InputOutputComponent},
    {path:'EventEmitterWithObject',component:EventEmitterWithObjectComponent},
    
  {path:'ViewEncapsulation',component:ViewEncapsulationComponent},
  {path:'AccessElement',component:AccessElementComponent},
  {path:'CommentSample',component:CommentSampleComponent},
  {path:'LifeCycle',component:LifeCycleComponent},
  {path:'CustomDirective',component:CustomDirectiveComponent},
  {path:'StructuralDirective',component:StructuralDirectiveComponent},
  {path:'ServicePart1',component:ServicePart1Component}
];
@NgModule({
  declarations: [
    AppComponent,
    ViewEncapsulationComponent,
    ViewEncapsulationWithComponent,
    ViewEncapsulationWithoutComponent,
    FirstComponentComponent,
    SelectorComponentComponent,
    DataBindingComponent,
    DirectivesComponent,
    InputOutputComponent,
    ChildComponent,
    EventEmitterWithObjectComponent,
    ChildpersonComponent,
    AccessElementComponent,
    NgContentDirectiveComponent,
    CommentSampleComponent,
    StarRatingComponent,
    LifeCycleComponent,
    ChildLifeCycleComponent,
    CustomDirectiveComponent,
    BasicHighlightDirective,
    AdvanceHightlightDirective,
    StructuralDirectiveComponent,
    UnlessDirective,
    ServicePart1Component,
    AddAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
