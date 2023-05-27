import { cartItem } from "./CartItem";

export class Cart{
    // constructor(cartItem:cartItem){}

    items:cartItem[]=[];
    total:number=0;
    
    get totalPrice():number{
        let totalPrice=0;
        this.items.forEach(item=>{
            totalPrice += item.Price;
        });
        return totalPrice;
    }
}