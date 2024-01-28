import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { BasketItem } from '../../shared/models/basket';
import { AccountService } from '../../account/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent{


  logo = "assets/images/logo.png";

  constructor(public basketService : BasketService,public accountService :AccountService) {

  }

  getCount(items :BasketItem[])
  {
    return items.reduce((sum,item) =>
    sum + item.quantity, 0)
  }

}
