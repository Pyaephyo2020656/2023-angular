import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent {

  @Input()
  value?:string

  @Output()
  valueChange = new EventEmitter
}
