import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { product } from 'src/app/shared/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
/**
 *
 */
product?:product;
constructor(private shopService:ShopService,private activetedRoute:ActivatedRoute) {
  
}
  ngOnInit(): void {
   this.loadData();
  }

  loadData()
  {
    const id=this.activetedRoute.snapshot.paramMap.get('id');
    if(id)
    this.shopService.getProduct(+id).subscribe({
      next:product=>this.product=product,
      error:error=>console.log(error)
      
  }
  
  )
  }
}
