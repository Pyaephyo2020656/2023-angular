import { Injectable } from "@angular/core";
import { Category, StorageService, Type } from "./balance.model";
import { IdGenerator } from "./id.generator";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { JsonPipe } from "@angular/common";

const STORAGE_KEY = "com.jdc.balance.category"

export type CategorySearch = {type:Type | '', name?:string, deleted?:boolean}

@Injectable({
    providedIn:'root'

})
export class CategoryService implements StorageService{

    private resource:  {[id:number]:Category} = {}

    constructor(private idGen:IdGenerator){}


    loadResource(): void {
        const data = localStorage.getItem(STORAGE_KEY)
        if(data){
            this.resource = JSON.parse(data)
        }
    }


    saveResource(): void {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.resource))
    }

   

    //Home, Income, Expense => Type or ''
    //Category Management => Type or '' & name

    search(params:CategorySearch):readonly Category[]{

        return Object.values(this.resource).filter(cat => {
            if(params.type && cat.type !== params.type){
                return false
            }

            if(params.name && !cat.name.toLocaleLowerCase().startsWith(params.name.toLocaleLowerCase())){
               return false
            }
            return !params.deleted
        })
    }

    switchDeleteStatus(id:number){
        const target = this.resource[id]
        if(target){
            target.deleted = !target.deleted
            this.saveResource()
        }
    }

    //Add New or Update
    save(data:Category){
        if(data.id ){
            this.resource[data.id] = data
        }else{
            const id = this.idGen.next('category')
            data.id = id
            this.resource[id] = data
        }

        this.saveResource()
    }

    isAlreadyExistName(name:string):boolean{
       return  Object.values(this.resource).find( category => category.name === name) != undefined
    }

 

    getNewObject():Category{
        return  {
            id:0,
            type:'',
            name: '',
            deleted: false
        }
    }

}