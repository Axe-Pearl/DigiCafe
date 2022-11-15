import { Component, OnInit } from '@angular/core';
import { CartstoreService } from 'src/app/services/cartstore.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { FoodFilter } from 'src/app/food-filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service1: OrderDetailsService, private service2: CartstoreService) { 
    // this.service1.realTimeDataIs.subscribe(data=>this.searchFoodVal=data)
  }
  foodData: any;
  cartSize: number = 0;
  isModelOpen: boolean = false;
  variableBtn : string = 'ADD PRODUCT';
  totalRecords: string = '';
  page: number = 1;
  // searchFoodVal:string = ""
  AddToCart(id: number , index: number){
    this.service2.cartData.push(...this.service1.foodDetails.filter((food:any) => food.id === id));
    this.service2.cartSize = this.service2.cartData.length;
    this.cartSize = this.service2.cartSize;
  }
  ngOnInit(): void {
    this.foodData = this.service1.foodDetails;
  }
  addProduct(){
    this.isModelOpen = !this.isModelOpen;
    this.isModelOpen ? this.variableBtn = "Cancel" : this.variableBtn = "ADD PRODUCT";
  }
}