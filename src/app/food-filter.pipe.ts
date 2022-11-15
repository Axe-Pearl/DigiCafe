import { Pipe, PipeTransform }  from "@angular/core";
import { OrderDetailsService } from "./services/order-details.service";

@Pipe({
  name: "foodFilter"
})

export class FoodFilter implements PipeTransform{
  constructor(public service: OrderDetailsService){}
  transform(foodItems : any[], searchValue: string) {
    if(!this.service.searchedFood) {
      return foodItems;
    }
    console.log("dha",searchValue);
    // const regex = new RegExp(`\\${this.service.searchedFood}\\i`);
    console.log(searchValue.toLowerCase())
    return foodItems.filter(foodItem => {
      console.log(foodItem.name);
    }
    );
  }
};