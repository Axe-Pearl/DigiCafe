import { Component, OnInit } from '@angular/core';
import { CartstoreService } from 'src/app/services/cartstore.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css', '../home/home.component.css']
})
export class CartComponent implements OnInit {

  constructor(public service: CartstoreService) { }
  yourCart : any = [];
  RemoveFromCart(ind: number){
     this.service.cartData.splice(ind, 1);
     this.service.cartSize = this.yourCart.length;
  }
  ngOnInit(): void {
    this.yourCart = this.service.cartData;
    console.log(this.yourCart);
    
  }
}
