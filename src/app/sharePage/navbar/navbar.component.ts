import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartstoreService } from 'src/app/services/cartstore.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  searchedFood: string = '';
  constructor(public service: CartstoreService, public service2: OrderDetailsService) { }
  searchTarget(){
    this.service2.searchedFood = this.searchedFood;
    // this.service2.setDataToRealtime(this.searchedFood)
  }
}
