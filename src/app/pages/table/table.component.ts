import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
OrderDetailsService
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor(public service: OrderDetailsService) { }
  page: number = 1;
  totalRecords: string ='';
  variableBtn : string = 'ADD PRODUCT';
  isModelOpen : boolean = false;
  ngOnInit(): void {
  }
  onDelete(id: any){
    console.log("this id:", id);
    this.service.foodDetails.splice(id-1, 1);
    localStorage.setItem('data', this.service.foodDetails);
  }
  addProduct(){
    this.isModelOpen = !this.isModelOpen;
    this.isModelOpen ? this.variableBtn = "Cancel" : this.variableBtn = "ADD PRODUCT";
    this.service.isModelOpen = this.isModelOpen;
  }
}
