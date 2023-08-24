import { Component } from '@angular/core';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  from = ["javaScript", "TypeScript", "Angular", "Spring"]
  to:string[]=[]

  dragValue?:string

  start(event:any){
    this.dragValue = event.target.innerText
  }

  enter(event:any){
    if(event.target.id == "to" && this.dragValue){
      this.to.push(this.dragValue)
      this.from = this.from.filter( a => a != this.dragValue)
    }
  }
}
