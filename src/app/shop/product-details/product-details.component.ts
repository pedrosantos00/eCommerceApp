import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../shared/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product? : Product;

  constructor(private shopService : ShopService, private activatedRoute: ActivatedRoute) {

  }




  ngOnInit(): void {
    this.loadProdut();
  }


  loadProdut(){
    //get id from the route
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) this.shopService.getProduct(+id).subscribe({
      next: product => this.product = product,
      error: error => console.log(error)
    });

  }

}
