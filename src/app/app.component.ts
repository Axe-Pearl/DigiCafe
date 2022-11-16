import { Component } from '@angular/core';
import { OrderDetailsService } from './services/order-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public service: OrderDetailsService){}
  title = 'Digivalet Store';
}
