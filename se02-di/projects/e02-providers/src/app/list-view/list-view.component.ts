import { Component, Inject } from '@angular/core';
import { StringStorage } from '../service/string-storage';
import { storage1, storage2 } from '../app.module';
import { IStorage } from '../service/storage';

@Component({
  templateUrl: './list-view.component.html',
  styles: [
  ]
})
export class ListViewComponent {

  constructor(@Inject(storage2) private storage:IStorage){

  }

  get list():string[]{
    return this.storage.list
  }

}
