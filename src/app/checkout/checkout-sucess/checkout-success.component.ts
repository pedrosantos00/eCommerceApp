import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Order } from '../../shared/models/order';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrl: './checkout-success.component.scss',
})
export class CheckoutSucessComponent  {

  order?: Order
  constructor(private router: Router) {
  const navigation = this.router.getCurrentNavigation();
  this.order = navigation?.extras?.state as Order
  }
  }
