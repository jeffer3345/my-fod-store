import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFoodComponent } from './card-food/card-food.component';



@NgModule({
  declarations: [
    CardFoodComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CardFoodComponent],

})
export class FoodModule { }
