import { Component } from '@angular/core';

@Component({
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {

  currentValue = '0'

  multiClass = ""

  bgPrimary?:true

  textSize = 12
}
