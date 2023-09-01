import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, Type } from '../../../models/balance.model';

@Component({
  selector:'category-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
 

  form:FormGroup 
  
  @Input()
  set data (data:Category){
    this.form.patchValue(data)
  }

  

  @Output()
  onSave= new EventEmitter

  constructor(builder:FormBuilder){
    this.form = builder.group({
      id: 0,
      type: ['',Validators.required],
      name:['',Validators.required],
      deleted:false
    },{
      Validators : []
    })
  }

  save(){
    this.onSave.emit(this.form.value)
  }
}
