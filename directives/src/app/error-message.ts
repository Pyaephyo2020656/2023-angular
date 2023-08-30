import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";

@Directive({
    selector:'[errorMessage]'
})
export class ErrorMessageDirective implements OnChanges{
    

    @Input() errorMessage:AbstractControl | null | undefined

    @Input() errorMessageName: string | null | undefined

    constructor(private templateRef:TemplateRef<any>, private container:ViewContainerRef){

    }

    ngOnChanges(changes: SimpleChanges): void {

        if((this.errorMessage?.touched || this.errorMessage?.dirty) && this.errorMessage.invalid){
            this.addError()
        }

        this.errorMessage?.statusChanges.subscribe(status => {
            if('VALID' === status){
                this.container.clear()
            }else{
                this.addError()
            }
        })
    }

    private addError(){
        const view = this.container.createEmbeddedView(this.templateRef)
         view.rootNodes[0].innerText = `Please Enter ${this.errorMessageName || 'Value'}`
    }
}