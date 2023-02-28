import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return [
      {
        id:1,
        name:'camarones',
        cookTime:'10-20',
        price:30,
        favorite:false,
        origins:['Italy'],
        stars:4.3,
        imageUrl:'/assets/images/foods/food-1.jpg',
        tags:['asados','apanados'],


      },
      {
        id:2,
        name:'pasta',
        cookTime:'10-20',
        price:30,
        favorite:true,
        origins:['Italy'],
        stars:4.3,
        imageUrl:'/assets/images/foods/food-2.jpg',
        tags:['asados','apanados'],
      },
     {
      id:3,
        name:'ravioli',
        cookTime:'10-20',
        price:25,
        favorite:false,
        origins:['Italy'],
        stars:4.3,
        imageUrl:'/assets/images/foods/food-3.jpg',
        tags:['asados','apanados'],
     },

     {
      id:2,
        name:'Pasta',
        cookTime:'10-20',
        price:45,
        favorite:true,
        origins:['Italy'],
        stars:4.3,
        imageUrl:'/assets/images/foods/food-2.jpg',
        tags:['asados','apanados'],
     },

     {
      id:1,
        name:'camarones',
        cookTime:'10-50',
        price:30,
        favorite:false,
        origins:['crustáceos '],
        stars:4.3,
        imageUrl:'/assets/images/foods/food-1.jpg',
        tags:['asados','apanados'],
     },
     {
      id:6,
        name:'japan pasta',
        cookTime:'10-20',
        price:30,
        favorite:true,
        origins:['japan'],
        stars:4.3,
        imageUrl:'/assets/images/foods/food-6.jpg',
        tags:['asados','apanados'],
     }
    ]


  }
}


