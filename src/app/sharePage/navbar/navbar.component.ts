import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartstoreService } from 'src/app/services/cartstore.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  constructor(public service: CartstoreService) { }
}
