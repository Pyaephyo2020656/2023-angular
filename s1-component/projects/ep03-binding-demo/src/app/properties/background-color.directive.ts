import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective implements OnChanges {

  

  @Input()
  appBackgroundColor?:string

  constructor(private render:Renderer2,private element:ElementRef){}

  ngOnChanges(changes: SimpleChanges): void {
   console.log(this.appBackgroundColor)

    if(this.appBackgroundColor){
      this.render.setStyle(this.element.nativeElement,"background-color",this.appBackgroundColor)
    }
    
  }

  

}
