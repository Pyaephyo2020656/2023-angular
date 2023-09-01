import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './balance-list.component.html',
  styleUrls: ['./balance-list.component.css']
})
export class BalanceListComponent {

  type = "Balance List"

  constructor(route:ActivatedRoute){
    route.params.subscribe(params => {
      this.type = params['type']
    })
  }

}
