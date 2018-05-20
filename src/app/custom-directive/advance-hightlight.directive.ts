import { Directive, ElementRef, Renderer, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAdvanceHightlight]'
})
export class AdvanceHightlightDirective implements OnInit {

  @Input()defaultColor:string='black';
  @Input()highlightColor:string='white';
  
  constructor(private elRef:ElementRef,private renderer0:Renderer,private renderer:Renderer2) { }
  ngOnInit(): void {
   this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
   this.renderer.setStyle(this.elRef.nativeElement,'color','white');
   this.c=this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(event:Event)
  {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','Silver');
   // this.c="white";
    this.c=this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeave(event:Event)
  {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
   // this.c="red";
   this.c=this.defaultColor;
  }
  @HostBinding('style.color')c:string='black';
}
