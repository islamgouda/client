import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Basket, basket, basketItem, BasketTotals } from 'src/app/shared/models/basket';
import { product } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = environment.apiUrl;
  private basketSource = new BehaviorSubject<Basket | null>(null);
  basketSource$ = this.basketSource.asObservable();
  private basketTotalSource=new BehaviorSubject<BasketTotals|null>(null);
  basketTotalSource$=this.basketTotalSource.asObservable();
  constructor(private http:HttpClient) { }
  getBasket(id:string)
  {
   return this.http.get<Basket>(this.baseUrl+'Basket?Id='+id).subscribe({
    next:basket=>{this.basketSource.next(basket);this.calculateTotals();}
   })
  }

  setBasket(basket:Basket)
  {
    return this.http.post<Basket>(this.baseUrl+'Basket',basket).subscribe({
      next:basket=>{this.basketSource.next(basket);
        this.calculateTotals();
      }
    })
  }

  getCurrentBasketValue()
  {
    return this.basketSource.value;
  }

  addItemToBasket(item:product , quantity=1)
  {
 const itemToAdd =this._mapProductItemToBascketItem(item);
 const basket=this.getCurrentBasketValue()??this.createBasket();
 basket.items=this.addOrUpdateItems(basket.items,itemToAdd,quantity);
 this.setBasket(basket);
  }
  addOrUpdateItems(items: basketItem[], itemToAdd:basketItem, quantity: number,):basketItem[]
  {
  const item=items.find(x=>x.id===itemToAdd.id);
  if(item)item.quantity+=quantity;
  else{
    itemToAdd.quantity=quantity;
    items.push(itemToAdd);
  }
  return items;
  }
  createBasket():basket
  {
    const createdBasket= new basket();
    localStorage.setItem("basket_id",createdBasket.id)
   return createdBasket;
  }
  private _mapProductItemToBascketItem(item: product):basketItem {
   return {
    id:item.id,
    productName:item.name,
    price:item.price,
    quantity:0,
    pictureUrl:item.pictureUrl,
    brand:item.productBrand,
    type:item.productType

   }
  }

  private calculateTotals(){
    var basket=this.getCurrentBasketValue();
    if(!basket){
      return;
    }
    const shipping=0;
    const subtotal=basket.items.reduce((a,b)=>(b.price*b.quantity)+a,0);
    const total= subtotal+shipping;
    this.basketTotalSource.next({shipping,total,subtotal})
  }
}
