import { foodDetail } from "./food";


export class cartItem{
    // static quantity:number;
    food:foodDetail;
    quantity:number=1;
    constructor(f:foodDetail){
        this.food=f;
    }
    

    get Price():number{
        return this.food.price*this.quantity;
    }

}