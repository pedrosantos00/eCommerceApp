import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Order } from '../shared/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  orders : Order[] = [];

  constructor(private orderService : OrdersService){}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders()
  {
    this.orderService.getOrders().subscribe({
      next: orders => this.orders = orders
    });
  }

}

