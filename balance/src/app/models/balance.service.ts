import { Injectable } from "@angular/core";
import { BalanceDetailsVO,  BalanceVO, BalanceWithDetails, BalanceWithDetialVO, StorageService } from "./balance.model";

@Injectable({
    providedIn: 'root'
})
export class BalanceService  implements StorageService{


    findViewById(id: number): BalanceWithDetialVO | null {
      return null
    }
    

    findById(id: number): BalanceWithDetails | null{
      return null
    }
   
    /*
      Search Detials Data
    */

    searchDetails(form: any): readonly BalanceDetailsVO[] {
      return []
    }
   

    /*
        Search Balance Data
    */
    search(form: any): readonly BalanceVO[] {
      return [];
    }

    loadResource(): void {
        console.log("Balance Service Load Resource")
    }

    saveResource(): void {
        throw new Error("Method not implemented.");
    }
   
   

}