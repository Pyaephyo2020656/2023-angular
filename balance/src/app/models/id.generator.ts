import { Injectable } from '@angular/core';
import { Category } from './balance.model';



@Injectable({
    providedIn:'root'
})
export class IdGenerator{

    private ids = {
        category:0,
        balance:0,
        details:0
    }

     next(resource: 'category' | 'balance' | 'details'):number {
       return  ++this.ids[resource]
       
     }
}