import { Injectable } from "@angular/core";
import { iarrays } from "./iarrays";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    order: iarrays[] = [];
    constructor(){}

    addToCart(obj: iarrays){
        this.order.push(obj);
    }

    getCart(){
        return this.order;
    }

    clearCart(){
        this.order = [];
        return this.order;
    }

    removeItem(){
        this.order.splice(0,1);
        return this.order;
    }

    calculateTotal(){
        let total : number = 0;
       
        for(let val of this.order){
            total = total + val.price;}
            return total;
    }

    getService(){
        let service: number = 0;
        service = this.calculateTotal() * 0.1;
        return service;
    }

    getDiscount(){
        let discount: number = 0;
        if(this.calculateTotal() + this.getService() > 40){
        discount = this.calculateTotal() * 0.15;
    }   return discount;
    }

    totalAmount(){
        let tamount: number = 0;
        tamount = this.calculateTotal() + this.getService() - this.getDiscount();
        return tamount;
    }
    getLength(){
        return this.order.length;
    }
}

   