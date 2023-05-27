import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { foodDetail } from '../shared/model/food';
import { ActivatedRoute,Route,Router } from '@angular/router';

import { StarRatingComponent } from 'ng-starrating';
import { CartServiceService } from '../services/food/cart/cart-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  i:number=0;
  food!: foodDetail ;
  searchtext:string='';
  foods:foodDetail[]=[];
  constructor(private route:Router,private cs:CartServiceService, private fs:FoodService,private ar:ActivatedRoute){}
  

  ngOnInit(): void {

    this.ar.params.subscribe((params)=>{
      if(params['tag']){
       this.foods=this.fs.getFoodbytags(params['tag']);
      console.log("hi"+params['tag']);
      }
      
      else{
        this.foods=this.fs.getAll();
      }

    })
      
  }

  addTocart(){
    this.cs.addToCart(this.food);
    this.route.navigateByUrl('/cart');
        this.cs.settotal();

  } 

  increment(){
    this.i=this.i+1;
  }
  onsearchText(searchvalue:string){
    this.searchtext=searchvalue;
  }
 

}
