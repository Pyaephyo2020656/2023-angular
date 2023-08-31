import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { MemberEditComponent } from './hello/member-edit/member-edit.component';
import { MemberDetailsComponent } from './hello/member-details/member-details.component';

const routes: Routes = [
  {path:'hello/:id/details', component:MemberDetailsComponent},
  {path:'hello/:id', component:MemberEditComponent},
  {path:'hello', component:HelloComponent},
  {path:'',redirectTo: '/hello', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
