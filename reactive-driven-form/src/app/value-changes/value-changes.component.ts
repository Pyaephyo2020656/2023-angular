import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';

import { ProductService } from './product.service';

@Component({
  templateUrl: './value-changes.component.html',
  styleUrls: ['./value-changes.component.css'],
  providers: [ProductService]
})
export class ValueChangesComponent {

  categories:string[] = []
  products: any[] = []

  form:FormGroup
 
 constructor(builder:FormBuilder, service: ProductService){

  this.categories = service.getCategory()

   this.form = builder.group({
    category:"",
    product: ["",Validators.required]
  
   }
   )

   this.form.get('category')?.valueChanges.subscribe(cat => {
    this.products = service.search(cat)
   })

   this.form.valueChanges.subscribe(console.log)
   this.form.statusChanges.subscribe(console.log)
   
 }

}
