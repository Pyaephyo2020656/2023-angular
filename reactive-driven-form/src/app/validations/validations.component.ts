import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppValidators } from './app-validators';

@Component({
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit{
    form:FormGroup
    formValue:any

    constructor(builder: FormBuilder){
      this.form = builder.group({
        name:["", Validators.required],
        phone:["", [AppValidators.phone]],
        email:["", Validators.compose([Validators.required, Validators.email])]
      })

      
    }
  ngOnInit(): void {
    this.formValue = this.form.value
  }

    

    
    save(){
      if(this.form.valid){
        console.log(this.form.value)
      }
    }
    
    get validationStatus(){
      return {
        form: this.form.valid ? 'Valid': 'invalid',
        name: this.form.get('name')?.valid ? 'valid': 'invalid',
        phone: this.form.get('phone')?.valid ? 'valid': 'invalid',
        email: this.form.get('email')?.valid ? 'valid': 'invalid',
      }
    }
}
