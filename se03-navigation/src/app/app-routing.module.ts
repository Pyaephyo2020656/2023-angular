import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { masterRoutes } from './master/master.module';

const routes: Routes = [
  {path:'hello', component:HelloComponent},
  {path:'master', children:masterRoutes},
  {path:'',redirectTo:'/hello', pathMatch: 'full'},
  {path:'**',redirectTo:'/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
