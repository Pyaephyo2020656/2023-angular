import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent {

  paramsMap:any
  params:any

  queryParams:any
  queryParamsMap:any

  constructor(route:ActivatedRoute){

    this.paramsMap = route.snapshot.paramMap
    this.params = route.snapshot.params

    this.queryParams = route.snapshot.queryParams
    this.queryParamsMap = route.snapshot.queryParamMap

    
  }
}
