import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { MasterComponent } from './master.component';
import { MemberComponent } from './member/member.component';
import { ProductComponent } from './product/product.component';

export const masterRoutes:Routes= [

  { path: 'category', component:CategoryComponent},
  { path: 'member', component:MemberComponent},
  { path: 'product', component:ProductComponent},
  {path:'',redirectTo: 'member', pathMatch:'full'}
]

@NgModule({
 
  declarations: [MasterComponent, MemberComponent, CategoryComponent, ProductComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    MasterComponent,
    CategoryComponent,
    ProductComponent
  ]

})
export class MasterModule { }
