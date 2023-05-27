import { Component, OnInit } from '@angular/core';
import { foodDetail } from '../shared/model/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartServiceService } from '../services/food/cart/cart-service.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!: foodDetail ;
  constructor(private route:Router, private ar:ActivatedRoute,private fs:FoodService,private cs:CartServiceService){
    ar.params.subscribe(params=>{
      if(params['id']) this.food=fs.getFoodbyId(params['id'])
    })
  }

  ngOnInit(): void {
      
  }

  addTocart(){
    this.cs.addToCart(this.food);
    this.route.navigateByUrl('/cart');
        this.cs.settotal();

  }
}
