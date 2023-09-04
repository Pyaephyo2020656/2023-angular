import { Injectable } from '@angular/core';
import { Category, StorageService } from './balance.model';

const STORAGE_KEY = "com.jdc.balance.ids"

@Injectable({
    providedIn:'root'
})
export class IdGenerator implements StorageService{
   
   
    private ids = {
        category:0,
        balance:0,
        details:0
    }

     next(resource: 'category' | 'balance' | 'details'):number {
       const id =   ++this.ids[resource]
        this.saveResource()
       return id
       
     }

     loadResource(): void {
        const data = localStorage.getItem(STORAGE_KEY)
        if(data){
            this.ids = JSON.parse(data)
        }
     }
 
     saveResource(): void {
         const idsStr = JSON.stringify(this.ids)
         localStorage.setItem(STORAGE_KEY, idsStr)
     }
 
}