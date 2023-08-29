import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from "@angular/core";

@Directive(
    {
        selector: '[hightLight]'
    }
)
export class HightLightDriectvie implements OnChanges{

    
    @Input()hightLight?:string
    @Input() size?:string
    bordered = false

     constructor(private eleRef:ElementRef, private render:Renderer2){
       
     }

     ngOnChanges(chages:SimpleChanges):void{
        this.render.setStyle(this.eleRef.nativeElement,'background-color',this.hightLight)
        if(this.size){
            this.render.setStyle(this.eleRef.nativeElement,'font-size',this.size)
        }
        
     }

     @HostListener('click') onClick(){
        if(this.bordered){
            this.removeBorder()
        }else{
            this.setBorder()
        }
        this.bordered = !this.bordered
     }

     private setBorder(){
        this.render.setStyle(this.eleRef.nativeElement,'border','solid 1px red')
     }

     private removeBorder(){
        this.render.removeStyle(this.eleRef.nativeElement,'border')
     }

}