import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Category } from "src/app/models/balance.model";
import { CategoryService } from "src/app/models/category.service";

@Component({
    selector:'search-bar',
    templateUrl:'search-bar.html'
})
export class SearchBar implements OnChanges {

    @Input()
    type?:string

    @Output()
    onSearch = new EventEmitter

    form:FormGroup

    categories: readonly Category[] = []

    constructor(builder:FormBuilder, service:CategoryService){
        this.form = builder.group({
            type: '',
            category:'',
            from: '',
            to:''
        })

        this.form.get('type')?.valueChanges.subscribe(value => {


          /*  if(value ){
                this.categories = service.search({type: value})
            }else{
                this.categories = []
            } 
            */

            this.categories = value ? service.search({type: value}) : []

            this.form.get('category')?.patchValue({category: ''})
        })
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.form.patchValue({type: this.type || ''})
    }

    search(){
        this.onSearch.emit(this.form.value)
    }
}