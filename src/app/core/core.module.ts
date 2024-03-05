import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [NavBarComponent, ServerErrorComponent, NotFoundComponent, SectionHeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
   // BreadcrumbModule,
   /* ToastrModule.forRoot({
      positionClass:'toast-bottom-right',
      preventDuplicates:true
    }),*/
  ],
  exports:[NavBarComponent,SectionHeaderComponent,NgxSpinnerModule]
})
export class CoreModule { }
