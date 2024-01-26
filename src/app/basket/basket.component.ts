import { Component, Input } from '@angular/core';
import { Product } from '../shared/models/product';
import { BasketService } from './basket.service';
import { BasketItem } from '../shared/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {


  constructor(public basketService : BasketService) {

  }


  addQuantity(item : BasketItem){
    this.basketService.addItemToBasket(item);
  }

  removeQuantity(id : number ){
    this.basketService.removeItemFromBasket(id);
  }

  removeItem(id : number, quantity:number) {
    this.basketService.removeItemFromBasket(id,quantity);
    }

}
