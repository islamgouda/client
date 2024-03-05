import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ShopComponent } from '../shop/shop/shop.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import { PagerComponent } from './pager/pager.component';
import { TestErrorComponent } from './test-error/test-error.component';
import {CarouselModule} from 'ngx-bootstrap/carousel'
@NgModule({
  declarations: [
   // ShopComponent
  
    PagingHeaderComponent,
   PagerComponent,
   TestErrorComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports:[
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule
  ],
})
export class SharedModule { }
