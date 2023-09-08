import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HelloComponent } from './hello/hello.component';
import { MasterModule } from './master/master.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HelloComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
