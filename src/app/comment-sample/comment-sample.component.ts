import { Component, OnInit, ElementRef } from '@angular/core';
import { IComment } from './comment';

@Component({
  selector: 'app-comment-sample',
  templateUrl: './comment-sample.component.html',
  styleUrls: ['./comment-sample.component.css']
})
export class CommentSampleComponent implements OnInit {

  comments:IComment[]=[];
  ratings:number[]=[2,2.5,3.4,4.5];
  constructor() { }
  
  ngOnInit() {
  }
  AddRate(event:KeyboardEvent,id :number){
  if(event.key.toLowerCase()!="enter")return;
   let userRate:number=+(<HTMLInputElement>event.target).value;
   this.comments[id-1].ratingList.push(userRate);
   let sum:number=0;

   this.comments[id-1].ratingList.forEach(element => {
    sum+=element;
   });
   this.comments[id-1].rating=sum/(this.comments[id-1].ratingList.length);

  }
  AddComment(txtComment:HTMLInputElement){

    this.comments.push(
      {ratingList:[], id:this.comments.length+1,agree:0,rating:0,comment:txtComment.value,disagree:0}
    );
  }
  like(id:number){
    
    this.comments[id-1].agree++;
  }
  dislike(id:number){
    this.comments[id-1].disagree++;
  }
}
