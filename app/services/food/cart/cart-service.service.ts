import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/model/cart';
import { foodDetail } from 'src/app/shared/model/food';
import { cartItem } from 'src/app/shared/model/CartItem';

@Injectable({
  providedIn: 'root' 
})
export class CartServiceService {

  private cart:Cart=new Cart();
  addToCart(food:foodDetail):void{
    let cartitem=this.cart.items.find(item=>item.food.id===food.id);
    if(cartitem){
      this.changeQuantity(food.id, cartitem.quantity+1);
      
      return;
    }
    else{
    this.cart.items.push(new cartItem(food));
    this.cart.total+=1;
    }
  }

  settotal():number{
    let sum:number=0;
    this.cart.items.forEach(item=>{
    sum+=item.quantity;
    })
    return sum;
  }
  removeFromCart(foodId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.food.id !=foodId);
  }

  changeQuantity(foodId:number,quantity:number):void{
    let cartitem=this.cart.items.find(item=> item.food.id===foodId);
    if(!cartitem) return;
    // this.cart.items.food.id=foodId;
    cartitem.quantity=quantity;
    // this.cart.total+=quantity;
    // this.cart.total-=1;
    // this.getCart();
  }

  getCart():Cart{
    return this.cart;
  }
}
