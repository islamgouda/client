import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router:Router,private Toaster:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((error:HttpErrorResponse)=>{
      debugger
      if(error.status==404)
      this.router.navigateByUrl("/not-found")
      else if(error.status==500)
      this.router.navigateByUrl("/server-error")
      else if(error.status==401)
      this.Toaster.error(error.message,error.status.toString(),{ toastClass: 'toast-error'})
      else if(error.status==400)
      this.Toaster.error(error.message,error.status.toString())
    return throwError(()=>error.message)


    })
    );
  }
}
