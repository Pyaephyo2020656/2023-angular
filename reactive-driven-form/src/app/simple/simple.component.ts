import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent {

  
   form:FormGroup
   categories = [
    {id:1, name: "Foods"},
    {id:1, name: "Drinks"},
    {id:1, name: "Snacks"},
    {id:1, name: "Accessories"},
   ]

  

   constructor(private builder:FormBuilder){

     this.form = builder.group({
      name:["", [Validators.required, Validators.maxLength(8)]],
      category:"", 
      price: 0,
      size: builder.group(
        {
          us: 0,
          uk: 0
        }
      ),
      colors: builder.array([]),
      props:builder.array([

      ])
      
    })
    this.addColor()
    this.addProp()
   }

   log(){
    console.log(this.form)
   }

   get name():FormControl{
      return this.form.get('name') as FormControl
   }

   get category():FormControl{
    return this.form.get('category') as FormControl
   }

   get colors():FormArray{
     return this.form.get('colors') as FormArray
   }

   addColor(){
     this.colors.push(this.builder.control(""))
   }

   removeColor(index:number){
    this.colors.removeAt(index)
    if(!this.colors.length){
      this.addColor()
    }
   }

   get props(): FormArray {
     return this.form.get('props') as FormArray
   }

   addProp(){
    this.props.push(this.builder.group({
      property:"",
      value:""
    }))
   }

   removeProp(index:number){
    this.props.removeAt(index)
    if(!this.props.length){
      this.addProp()
    }
   }

   showError(name:string){
     return this.form.get(name)?.invalid && (this.form.get(name)?.touched || this.form.get(name)?.dirty)
   }
}
