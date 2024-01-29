import { Order } from './../../shared/models/order';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrl: './order-detailed.component.scss'
})
export class OrderDetailedComponent implements OnInit{

  constructor(private orderService : OrdersService, private activatedRoute : ActivatedRoute) {}
  order? : Order;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id)  this.loadOrder(+id);
  }

  loadOrder(id:number){
    this.orderService.getOrderById(id).subscribe({
      next: order => this.order = order
    })
  }
}
