import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class AppValidators {
     
    static phone(control:AbstractControl):ValidationErrors | null{

        const regexp = new RegExp('^0\\d{2}([ -]\\d{4}){2}$') 

        if(!regexp.test(control.value)){
            return {
                phone: "Invalid Phone Number"
            }
        }

        return null
    }
}