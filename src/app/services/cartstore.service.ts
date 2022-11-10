import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartstoreService {
  cartData: object[] = [];
  cartSize: number = 0;
  constructor() { }
}
