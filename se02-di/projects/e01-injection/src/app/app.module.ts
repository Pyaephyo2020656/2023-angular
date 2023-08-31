import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MemberService } from './service/member.service';
import { MemberEditComponent } from './hello/member-edit/member-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberDetailsComponent } from './hello/member-details/member-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MemberEditComponent,
    MemberDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
