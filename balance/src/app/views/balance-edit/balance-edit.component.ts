import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {  Category, Type } from 'src/app/models/balance.model';
import { BalanceService } from 'src/app/models/balance.service';
import { CategorySearch, CategoryService } from 'src/app/models/category.service';

@Component({
  templateUrl: './balance-edit.component.html',
  styleUrls: ['./balance-edit.component.css']
})
export class BalanceEditComponent {

  type =''
  categories: readonly Category[] = []

  form:FormGroup

  constructor(
    private builder:FormBuilder, 
    route:ActivatedRoute,
    catService:CategoryService, 
    private service:BalanceService){


    this.form = builder.group({
      balance: builder.group({
        id:0,
        useDate:['',[Validators.required, Validators.pattern('yyyy-MM-dd')]],
        categoryId:['',[Validators.required]],
        total: [0, Validators.min(500)],
        employee:['',Validators.required]
      }),
      details:builder.array([

      ])
    })


    route.params.subscribe(params => {
      this.type = params['type']
      const id = Number(params['id'])

      const categorySearch: CategorySearch= {type: this.type as Type}

      //Edit
      if(id){
        // Get Balance Data & Detials Data

        const dto = this.service.findById(id);

        if(dto){
          //Set Balance Data to Edit
          this.form.patchValue({balance: dto.balance})

          //Set Detial Data to Edit

          


        }else{
          categorySearch.deleted = false
        }


        this.categories = catService.search(categorySearch)

      }
    })
  }


  save(){

  }

  addDetails(){

  }

  private getDetailsControl():FormGroup{
    return this.builder.group({})
  }
}
