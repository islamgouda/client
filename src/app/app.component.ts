import { Component, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import { pagination } from './shared/models/paging';
import { product } from './shared/models/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Welcome To Store Application';
  constructor(private HttpClient:HttpClient){}
  products:any[]=[]
  ngOnInit(): void {
    debugger
    this.HttpClient.get<pagination<product[]>>("https://localhost:7051/api/Product/GetAll?pageSize=50").subscribe({
      next:(response)=>{this.products=response.data
      //console.log(this.products)
    },
      error:error=>console.log(error),
      complete:()=>console.log("requestCompleted")

    })
    
  }
}
