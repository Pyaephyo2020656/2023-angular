import { Component, OnDestroy } from '@angular/core';

import { MemberService, ROLES } from '../../service/member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  templateUrl: './member-edit.component.html',
  styles: [
  ],
  providers:[
    SubSink
  ]
})
export class MemberEditComponent implements OnDestroy {

  form:FormGroup
  roles = ['',...ROLES]
  

  constructor(
    builder:FormBuilder,
    route:ActivatedRoute,
    private router:Router,
    private sub:SubSink,
    private service:MemberService){

      this.form = builder.group({
        id:0,
        role:['',Validators.required],
        name:['',Validators.required],
        phone:['',Validators.required],
        email:['',Validators.required]
      })

     this.sub.sink =  route.params.subscribe(params => {
         const id = Number(params['id'])
         if(id){
           this.form.patchValue(service.findById(id))
         }
      })
    }


  ngOnDestroy(): void {
   this.sub.unsubscribe()
  }

    save(){
      const id =  this.service.save(this.form.value)
      this.router.navigate(['/hello', id, 'details'])
    }
}
