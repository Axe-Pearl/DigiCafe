import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() isOpen = false;
  constructor(private fb: FormBuilder, public service: OrderDetailsService, private _http: HttpClient) { }
  errorMsg: any = "";
  arr: any = {};
  addProductForm = this.fb.group({
    id: [this.service.foodDetails.length + 1, [Validators.required]],
    foodName: ['', [Validators.required, Validators.minLength(3)]],
    foodDetails: ['',[Validators.required]],
    foodPrice: [0 , [Validators.required]],
    foodImg: ['', [Validators.required]]
  })
  ngOnInit(): void {
  }
  onSubmit(){
    this.arr = (this.addProductForm.value);
    this.service.foodDetails.push(this.arr)
  }
  validateImg(){
    
  }
}
