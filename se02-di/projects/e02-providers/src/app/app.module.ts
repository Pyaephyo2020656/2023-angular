import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvideClassComponent } from './provide-class/provide-class.component';
import { StringStorage } from './service/string-storage';
import { ListViewComponent } from './list-view/list-view.component';
import { IStorage } from './service/storage';
import { ModifiedStroage } from './service/modified.storage';

export const storage1 = new InjectionToken("storage1")
export const storage2 = new InjectionToken("storage2")

const ValueStorage: IStorage = {
  list:[],
  add:(str) => ValueStorage.list.push(str)
}

function getStorage():IStorage{
  const s = new ModifiedStroage()
  s.add("Angular")
  s.add("TypeScript")
  s.add("Something")
  return s
}

@NgModule({
  declarations: [
    AppComponent,
    ProvideClassComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: storage1, useValue:ValueStorage},
    {provide: storage2, useClass:StringStorage},
    {provide: 3, useFactory:getStorage}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
