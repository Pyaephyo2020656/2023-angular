import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[phone]',
  providers:[{
    provide:NG_VALIDATORS,useExisting: PhoneValidatorDirective, multi:true
  }]
})
export class PhoneValidatorDirective implements Validator {

  constructor() { }


  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    let value = control.value
    const regex = new RegExp("^9\\d([- ' ']\\d{4}){2}")

    if((new RegExp("^9\\d([- ' ']\\d{4}){2}")).test(control.value)){
      return {phone: true}
    }
    return null
  }


  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
