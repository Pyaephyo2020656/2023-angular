import { Component } from '@angular/core';
import { Category } from 'src/app/models/balance.model';
import { CategoryService } from 'src/app/models/category.service';
import { FormGroup, FormBuilder } from '@angular/forms';

declare var $:any

@Component({
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  target:Category = this.service.getNewObject()
  list: readonly Category[]= []

  form:FormGroup

  constructor(builder:FormBuilder, private service:CategoryService){
      this.form = builder.group({
        type:'',
        name:''
      })
  }

  search(){
    this.list = this.service.search(this.form.value)
  }

 

  addNew(){
    this.edit(this.service.getNewObject())
    
  }

  edit(category:Category){
    this.target = category
    $('#edit-dialog').modal('show')
  }

  save(data:Category){
    //Save to Modal
    this.service.save(data)

    //Close Dialog
    $('#edit-dialog').modal('hide')

    //Reload List View

    this.search()

  }

}
