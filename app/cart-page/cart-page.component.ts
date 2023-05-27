import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/food/cart/cart-service.service';
import { Cart } from '../shared/model/cart';
import { cartItem } from '../shared/model/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  
  cart!:Cart;
  constructor(private service:CartServiceService){
    this.setCart();
  }

  ngOnInit(): void {
  }

  setCart(){
    this.cart=this.service.getCart();
  }

  remove(cartitem:cartItem){
    this.service.removeFromCart(cartitem.food.id);
    this.cart.total=this.service.settotal();

  }

  change(cartitem:cartItem,quantityinstring:string){
    const quantity=parseInt(quantityinstring);
    this.service.changeQuantity(cartitem.food.id,quantity);
    console.log(quantity);
    this.setCart();
    this.cart.total=this.service.settotal();
  }
}
