import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { LifeCycleAware } from './lifecycle';

@Component({
  templateUrl: './all-lifecycle.component.html',
  styles: []
})
export class AllLifecycleComponent extends LifeCycleAware {
  
  message = "Hello LifeCycle";

  count=0;
  
  override get comp(): string {
    return 'parent'
  }

  countUp(up:boolean){
    if(up){
      ++this.count
    }else{
      --this.count
    }
  }

  

  
  
}
