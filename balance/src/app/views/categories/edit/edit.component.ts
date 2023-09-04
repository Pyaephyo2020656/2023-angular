import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, Type } from '../../../models/balance.model';
import { CategoryService } from 'src/app/models/category.service';

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

  constructor(builder:FormBuilder, service:CategoryService){
    this.form = builder.group({
      id: 0,
      type: ['',Validators.required],
      name:['',[Validators.required, (control:AbstractControl) => {

        if(service.isAlreadyExistName(control.value)){
            //Error
            return {
              error: 'Category name is already exist'
            }
        }

        return null
      }]],
      deleted:false
    })
  }

  save(){
    this.onSave.emit(this.form.value)
  }
}
