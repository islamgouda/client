import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { product } from 'src/app/shared/models/product';
import { Type } from 'src/app/shared/models/types';
import { brand } from 'src/app/shared/models/brands';
import { shopParams } from 'src/app/shared/models/shopParams';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  products:product[]=[]
  Types:Type[]=[]
  brands:brand[]=[]
  searchText!:string;
  //brandIdSelected=0;
  //typeIdSelected=0;
  //sortSelected="name";
  shopParams= new shopParams();
  totalcount=0;
sortOptions=[
  {name:"Alphabetical",value:"name"},
  {name:"price:Low To Heigh",value:"priceAscendeing"},
  {name:"price:Heigh To Low",value:"priceDescendeing"}
]
  constructor(private shop:ShopService){

  }
  ngOnInit(): void {
   this.getProducts();
   this.getBrandes();
   this.getTypes();
  }
  getProducts(){
    console.log(this.shopParams)
    this.shop.getProducts(this.shopParams).subscribe({
     
      next:Response=>{
        this.products=Response.data;console.log(this.products)
      this.shopParams.pageNumber=Response.pageIndex;
     // this.shopParams.pageSize=Response.pageSize;
      this.totalcount=Response.count;
    },
      error:error=>console.log(error),
      
    });
  }
  getBrandes(){
    this.shop.getBrands().subscribe({
      next:Response=>this.brands=[{id:0,name:"All"},...Response],
      error:error=>{console.log(error)}
      
    })
  }
  getTypes(){
    this.shop.getTypes().subscribe({
      next:Response=>this.Types=[{id:0,name:"All"},...Response],
      error:error=>{console.log(error)}
      
      
    })
  }
  onBrandSelected(brand:number){
  this.shopParams.brandId=brand;
  this.getProducts();
  }
  onTypeSelected(Type:number){
    this.shopParams.typeId=Type;
    this.getProducts();
    }
    
    onSortSelected(event:any){
      this.shopParams.sort=event.target.value;
      this.getProducts();
    }

    onPageChanged(event:any){
      debugger
      if(this.shopParams.pageNumber!==event.page){
        this.shopParams.pageNumber=event.page
        
        this.getProducts();
      }
    }
}
