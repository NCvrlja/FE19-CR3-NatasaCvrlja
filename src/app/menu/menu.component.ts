import { Component, OnInit } from '@angular/core';
import { iarrays } from '../iarrays';
import { foods } from '../arrays';
import { CartService } from '../cart.servise';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  foods: iarrays[] = foods;
  

  constructor(private cartService: CartService){}

  addToCart(obj: iarrays){
    this.cartService.addToCart(obj);
    alert("Added to your orders")
  }
  ngOnInit(): void {
    
  }
}
