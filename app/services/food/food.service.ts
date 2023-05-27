import { Injectable } from '@angular/core';
import { foodDetail } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodbyId(id:number):foodDetail{
    return this.getAll().find(food=>food.id==id)!;
  }
  getAll():foodDetail[]{
    return [
      {
        id:1,
        name:'Apple',
        price:80,
        fav:false,
        star:3,
        tag:'fruits',
        imageUrl:'/assets/apple.jpg'
      },
      {
        id:2,
        name:'Strawberry',
    price:60,
        fav:true,
    star:3.5,
    tag:'fruits',
    imageUrl:  '/assets/straw.jpg',
      },
      {
        id:3,
        name:'Broccoli',
    price:120,
    fav:true,
    star:4,
    tag:'vegetables',
    imageUrl:'/assets/broccoli.jpg',
      },
      {
        id:4,
        name:'Stevia',
    price:180,
    fav:true,
    star:4,
    tag:'sweetner',
    imageUrl:'/assets/stevia.jpg'
      },
      {
        id:5,
        name:'Mango',
    price:200,
    fav:true,
    star:5,
    tag:'fruits',
    imageUrl:'/assets/mango.jpg'
      },
      {
        id:6,
        name:'Brinjal',
    price:40,
    fav:false,
    star:3,
    tag:'vegetables',
    imageUrl:'/assets/brinjal.jpg',
      },
      
      {
        id:7,
        name:'pepper',
    price:140,
    fav:false,
    star:3,
    tag:'spices',
    imageUrl:'/assets/pepper.jpg',
      },
      {
        id:8,
        name:'Chilli powder',
    price:110,
    fav:false,
    star:4.5,
    tag:'spices',
    imageUrl:'/assets/chilli.jpg',
      },
      {
        id:9,
        name:'Castor-oil',
    price:240,
    fav:false,
    star:3,
    tag:'oil & ghee',
    imageUrl:'/assets/castor.jpg',
      },
      
      {
        id:10,
        name:'Stevia',
    price:160,
    fav:true,
    star:4,
    tag:'sweetner',
    imageUrl:'/assets/stevia2.jpg'
      },

      {
        id:11,
        name:'Monk fruit sugar',
    price:180,
    fav:true,
    star:4,
    tag:'sweetner',
    imageUrl:'/assets/stevia3.jpg'
      },
      {
        id:12,
        name:'Cold press oil',
    price:175,
    fav:false,
    star:3,
    tag:'oil & ghee',
    imageUrl:'/assets/cold.jpg',
      },
      {
        id:13,
        name:'Jaggery',
    price:140,
    fav:true,
    star:4.5,
    tag:'sweetner',
    imageUrl:'/assets/jag1.jpg'
      },
      {
        id:14,
        name:'Jaggery',
    price:190,
    fav:true,
    star:5,
    tag:'sweetner',
    imageUrl:'/assets/jag3.jpg'
      },
      {
        id:15,
        name:'Dates',
    price:120,
    fav:false,
    star:3,
    tag:'sweetner',
    imageUrl:'/assets/dates2.jpg'
      },
      {
        id:16,
        name:'Curcumin',
    price:140,
    fav:true,
    star:4.5,
    tag:'spices',
    imageUrl:'/assets/curcumin.jpg'
      },
      {
        id:17,
        name:'Cloves',
    price:95,
    fav:false,
    star:4,
    tag:'spices',
    imageUrl:'/assets/cloves.jpg'
      },
      {
        id:18,
        name:' Cow Ghee',
    price:165,
    fav:false,
    star:3,
    tag:'oil & ghee',
    imageUrl:'/assets/ghhe.jpg',
      },
      {
        id:19,
        name:'Desi Ghee',
    price:185,
    fav:false,
    star:3,
    tag:'oil & ghee',
    imageUrl:'/assets/ghee3.jpg',
      },
      {
        id:20,
        name:'  Ghee',
    price:195,
    fav:false,
    star:3,
    tag:'oil & ghee',
    imageUrl:'/assets/ghee2.jpg',
      },
      {
        id:21,
        name:'Herbs',
    price:140,
    fav:true,
    star:4.5,
    tag:'spices',
    imageUrl:'/assets/herbs.jpg'
      },

      {
        id:22,
        name:'Tomato',
    price:35,
    fav:true,
    star:3,
    tag:'vegetables',
    imageUrl:'/assets/tomato.jpg',
      },
      {
        id:23,
        name:'Watermelon',
    price:30,
    fav:true,
    star:4,
    tag:'fruits',
    imageUrl:'/assets/water.jpg'
      },
      {
        id:24,
        name:'Pineapple',
    price:55,
    fav:false,
    star:3.5,
    tag:'fruits',
    imageUrl:'/assets/pine.jpg'
      }

    ]   
  }

  getAllTags():Tag[]{
    return [
      {name:'All',count:24},
      {name:'fruits',count:5},
      {name:'vegetables',count:3},
      {name:'oil & ghee',count:5},
      {name:'sweetner',count:6},
      {name:'spices',count:5 }
    ];

  }

  getFoodbytags(tags:string):foodDetail[]{
    return tags=='All'? 
    this.getAll():this.getAll().filter(food=>food.tag?.includes(tags));
  }
}
