import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AttributeComponent } from './attribute/attribute.component';
import { EventsComponent } from './events/events.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertiesComponent } from './properties/properties.component';
import { TwoWayComponent } from './two-way/two-way.component';

const routes: Routes = [
  {path:"",component:InterpolationComponent},
  {path:"props",component:PropertiesComponent},
  {path:"attr",component:AttributeComponent},
  {path:"events",component:EventsComponent},
  {path:"two-way",component:TwoWayComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
