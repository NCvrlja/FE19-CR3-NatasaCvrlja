import { Component, OnInit } from '@angular/core';
import { iarrays } from '../iarrays';
import { ActivatedRoute, Params } from '@angular/router';
import { foods } from '../arrays';
import { CartService } from '../cart.servise';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  food: iarrays = {} as iarrays;
  index: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService){
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    alert("Added to your orders")
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['indexRouting'];
      this.food = foods[this.index];
    });
  }
}
