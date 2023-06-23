import { Component, DoCheck } from '@angular/core';
import { CartService } from '../cart.servise';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck {
  length: number = 0;

  constructor(private cartService: CartService){}

  ngDoCheck(): void{
    this.length = this.cartService.getLength();
  }
}
