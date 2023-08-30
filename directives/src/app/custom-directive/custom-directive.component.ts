import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent {

  form:FormGroup

  constructor(builder:FormBuilder){

    this.form = builder.group({
      name:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required]
    })
  }

}
