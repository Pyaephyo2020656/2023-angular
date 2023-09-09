import { NgModule } from '@angular/core';
import {  Route,  RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { FormsComponent } from './forms/forms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PathComponent } from './hello/path/path.component';
import { MatrixComponent } from './hello/matrix/matrix.component';
import { QueryComponent } from './hello/query/query.component';

const ROUTES:Route[] = [
    {path:'hello', component:HelloComponent, children: [
        {path:'path/:id/category/:type',component:PathComponent },
        {path:'matrix', component:MatrixComponent},
        {path:'query',component:QueryComponent},
        {path:'',redirectTo:'matrix', pathMatch:'full'}
    ]},
    {path:'form', component:FormsComponent},
    {path:'', redirectTo: '/hello', pathMatch:'full'},
    {path:'**',component:NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}