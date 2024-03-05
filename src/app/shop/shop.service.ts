import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable,} from '@angular/core';
import { pagination } from '../shared/models/paging';
import { product } from '../shared/models/product';
import { brand } from '../shared/models/brands';
import { Type } from '../shared/models/types';
import{shopParams}from '../shared/models/shopParams'
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }
  baseUrl="https://localhost:7051/api/"
  getProducts(shopParams:shopParams){
    let params=new HttpParams();
    if(shopParams.brandId)params=params.append("brandId",shopParams.brandId);
    if(shopParams.typeId)params=params.append("typeId",shopParams.typeId);
    if(shopParams.sort)params=params.append("order",shopParams.sort);
    params=params.append("pageIndex",shopParams.pageNumber);
    params=params.append("pageSize",shopParams.pageSize);
    debugger
    console.log(shopParams);
   return this.http.get<pagination<product[]>>(this.baseUrl+"Product/GetAll",{params:params})
  }
  getBrands(){
 return this.http.get<brand[]>(this.baseUrl+"Product/GetALLBrands");
  }
  getTypes(){
return this.http.get<Type[]>(this.baseUrl+"Product/GetALLTypes");
  }
  getProduct(id:number)
  {
    return this.http.get<product>(this.baseUrl+"Product/"+id);
  }
}
