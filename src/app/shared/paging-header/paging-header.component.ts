import { Component, Input, input } from '@angular/core';
import { ShopParams } from '../models/shopParams';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrl: './paging-header.component.scss'
})
export class PagingHeaderComponent {
@Input() shopParams = new ShopParams();
@Input() totalCount : number = 0;
}
