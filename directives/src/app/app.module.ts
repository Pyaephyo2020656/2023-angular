import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { HightLightDriectvie } from './custom-directive/hight-light.directive';
import { ErrorMessageDirective } from './error-message';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    IfDemoComponent,
    SwitchDemoComponent,
    ForDemoComponent,
    CustomDirectiveComponent,
    HightLightDriectvie,
    ErrorMessageDirective
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
