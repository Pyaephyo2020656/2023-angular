import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { StorageService } from './models/balance.model';


export const STORAGE_SERVICES = new InjectionToken("STORAGE_SERVICES")

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'balance';

  constructor(@Inject(STORAGE_SERVICES) private storageServices:StorageService[]){}

  ngOnInit(): void {
    this.storageServices.forEach(service => service.loadResource())
  }
}
