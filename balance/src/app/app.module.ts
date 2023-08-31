import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceDetailsComponent } from './balance-details/balance-details.component';
import { BalanceEditComponent } from './balance-edit/balance-edit.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { BalanceListComponent } from './balance-list/balance-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceDetailsComponent,
    BalanceEditComponent,
    CategoriesComponent,
    HomeComponent,
    BalanceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
