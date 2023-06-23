import { Component, OnInit } from '@angular/core';
import { iarrays } from '../iarrays';
import { CartService } from '../cart.servise';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order: iarrays[] = [];
  total: number = 0;
  service: number = 0;
  discount: number = 0;
  tamount: number = 0;
  orderform = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  })

  constructor(private cartService: CartService){}
  onSubmit(){
    if(this.orderform.valid){
      alert("Thank you for your order!")
      console.log(this.orderform.value);
      this.orderform.reset();
    }
  }
  removeItem(){
    this.order = this.cartService.removeItem();
    this.total = this.cartService.calculateTotal();
    this.service = this.cartService.getService();
    this.discount = this.cartService.getDiscount();
    this.tamount = Math.round(this.cartService.totalAmount());
  }
  ngOnInit(): void {
    this.order = this.cartService.getCart();
    this.total = this.cartService.calculateTotal();
    this.service = this.cartService.getService();
    this.discount = this.cartService.getDiscount();
    this.tamount = Math.round(this.cartService.totalAmount());
  }

}
