import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { HttpClient } from "@angular/common/http";
import { ImgvalidatorService } from 'src/app/services/imgvalidator.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() isOpen = false;
  @Output() public addEvent = new EventEmitter();
  constructor(public service1: ImgvalidatorService ,private fb: FormBuilder, public service: OrderDetailsService, private http: HttpClient) { }
  errorMsg: any = "";
  arr: any = {};
  result: any =''
  public isValidImage: boolean = false;
  private url : string = "https://thumbs.dreamstime.com/b/healthy-food-selection-healthy-food-selection-fruits-vegetables-seeds-superfood-cereals-gray-background-121936825.jpg";
  addProductForm = this.fb.group({
    foodName: ['', [Validators.required, Validators.minLength(3)]],
    foodDetails: ['',[Validators.required]],
    foodPrice: [ , [Validators.required]],
    foodImg: ['', [Validators.required]]
  })
  ngOnInit(): void {
    
  }
  public formClasses = {
    "d-none": this.isOpen,
    "doAnimate": this.isOpen
  }
  ngOnChanges(changes: SimpleChanges): void{
    console.log("Model Open", this.isOpen, this.service.isModelOpen);
    
     this.formClasses['d-none'] = !this.isOpen;
     this.formClasses['doAnimate'] = this.isOpen;
  }
  
  onSubmit(){
    this.arr = {...this.addProductForm.value, id:this.service.foodDetails.length + 1 };
    this.service.foodDetails.push(this.arr);
    localStorage.setItem('data',JSON.stringify(this.service.foodDetails))
    console.log(this.service.foodDetails);
    this.addEvent.emit({length: this.service.foodDetails.length, modelOpen: false });
    this.service.isModelOpen = false;
  }
  validate(url: any){
    console.log(url.value);
    this.service1.validateImg(url.value)
        .subscribe(data => {
          console.log("Data", data);
          this.isValidImage = data.type.includes('image');
        }
    );
    console.log("isValid Image: ", this.isValidImage)
  }
  }
