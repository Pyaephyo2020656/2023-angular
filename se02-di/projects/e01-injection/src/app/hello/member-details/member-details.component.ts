import { Component } from '@angular/core';
import { Member, MemberService } from '../../service/member.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './member-details.component.html',
  styles: [
  ]
})
export class MemberDetailsComponent {

  member?:Member

  constructor(
    private service:MemberService,
    route:ActivatedRoute
  ){
    route.paramMap.subscribe(params => {
      this.member = service.findById(Number(params.get('id')))
    })
  }

}
