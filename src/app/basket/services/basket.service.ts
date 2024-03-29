import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Basket, basket } from 'src/app/shared/models/basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = environment.apiUrl;
  private basketSource = new BehaviorSubject<Basket | null>(null);
  basketSource$ = this.basketSource.asObservable();
  constructor(private http:HttpClient) { }
  getBasket(id:string)
  {
   return this.http.get<Basket>(this.baseUrl+'Basket?Id='+id).subscribe({
    next:basket=>this.basketSource.next(basket)
   })
  }

  setBasket(basket:Basket)
  {
    return this.http.post<Basket>(this.baseUrl+'Basket',basket).subscribe({
      next:basket=>this.basketSource.next(basket)
    })
  }

  getCurrentBasketValue()
  {
    return this.basketSource.value;
  }
}
