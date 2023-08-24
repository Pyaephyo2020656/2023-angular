import { Component } from '@angular/core';

@Component({
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {

  parentValue?:string = ""

  formValue = ""

}
