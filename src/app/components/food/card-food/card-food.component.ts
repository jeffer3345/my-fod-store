import { Food } from './../../../shared/models/food';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-food',
  templateUrl: './card-food.component.html',
  styleUrls: ['./card-food.component.scss']
})
export class CardFoodComponent {
  @Input() public  food: Food | undefined


}
