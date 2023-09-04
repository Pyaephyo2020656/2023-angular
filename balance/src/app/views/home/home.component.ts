import { Component } from '@angular/core';
import { BalanceVO } from 'src/app/models/balance.model';
import { BalanceService } from 'src/app/models/balance.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  list: readonly BalanceVO[] = []

  constructor(private service:BalanceService){}

  search(form:any){
    this.list = this.service.search(form);
  }



}
