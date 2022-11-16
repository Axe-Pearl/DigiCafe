import { Pipe, PipeTransform }  from "@angular/core";
import { OrderDetailsService } from "./services/order-details.service";

@Pipe({
  name: "foodFilter"
})

export class FoodFilter implements PipeTransform{
  constructor(public service: OrderDetailsService){}
  transform(foodItems : any[], searchValue: string) {
    if(!searchValue) return foodItems;
    const regex = new RegExp(searchValue, 'gi');
    return foodItems.filter(foodItem => regex.test(foodItem.foodName));
  }
};