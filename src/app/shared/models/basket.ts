import * as cuid from 'cuid'
export interface basketItem
{
id:number;
productName:string;
price:number;
quantity:number;
pictureUrl:string;
brand:string;
type:string;
}

export interface Basket
{
    id:string;
    items:basketItem[];
}

export class basket implements Basket
{
    id=cuid();
    items: basketItem[]=[];
}

export interface BasketTotals
{
    shipping:number;
    subtotal:number;
    total:number;
}