import { Component, Inject } from '@angular/core';
import { StringStorage } from '../service/string-storage';
import { storage1 } from '../app.module';
import { IStorage } from '../service/storage';

@Component({
  templateUrl: './provide-class.component.html',
  styles: [
  ],
  providers:[
    
  ]
})
export class ProvideClassComponent {

  constructor( @Inject(3) private stroage:IStorage){}

  addName(name:string){
    this.stroage.add(name)
  }
  
  get list():string[]{
    return this.stroage.list
  }

}
