import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BalanceDetailsVO, BalanceVO, BalanceWithDetialVO } from 'src/app/models/balance.model';
import { BalanceService } from 'src/app/models/balance.service';

@Component({
  templateUrl: './balance-details.component.html',
  styleUrls: ['./balance-details.component.css']
})
export class BalanceDetailsComponent {

  private balanceVO?:BalanceWithDetialVO | null


  constructor(route: ActivatedRoute, service:BalanceService){
    route.paramMap.subscribe(map => {
      const id =  Number(map.get('id'))
      if(id){
        this.balanceVO = service.findViewById(id)
      }
    })
  }

  get balance():BalanceVO | null {
    return this.balanceVO?.balance || null
  }

  get details(): BalanceDetailsVO[] | null {
    return this.balanceVO?.details || null
  } 

}
