import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Order } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  getOrders(){
    return this.http.get<Order[]>(this.baseUrl + 'orders');
  }

  getOrderById(id: number){
    return this.http.get<Order>(this.baseUrl + 'orders/'  +id );
  }

}
