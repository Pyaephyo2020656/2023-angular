import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject, of } from 'rxjs';

@Component({
  templateUrl: './value-changes.component.html',
  styleUrls: ['./value-changes.component.css']
})
export class ValueChangesComponent {

  categories = ["Foods", "Drinks", "Snacks"]
  products = [
    { cat: "Foods", name: "Potato Chips"},
    { cat: "Foods", name: "Hot Dogs"},
    { cat: "Drinks", name: "Pepsi"},
    { cat: "Drinks", name: "Cocacola"},
    { cat: "Snacks", name: "Candy"},
    { cat: "Snacks", name: "Chocalat"},
    { cat: "Foods", name: "Humberger"}
  ]

  form:FormGroup
 
 constructor(builder:FormBuilder){
   this.form = builder.group({
    category:"",
    product: ""
  
   }
   )
   
 }

}
