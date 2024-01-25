import { Component, Input } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ShopParams } from '../../shared/models/shopParams';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
@Input() product?: Product;
}
