import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent {
/**
 *
 */
baseUrl=environment.apiUrl
constructor(private http:HttpClient) {
  //super();
  
}
get404Error()
{
  this.http.get(this.baseUrl+"products/43").subscribe({
    next:Response=>console.log(Response),
    error:error=>console.log(error)
  })
}
get500Error()
{
  this.http.get(this.baseUrl+"Buggy/ServerError").subscribe({
    next:Response=>console.log(Response),
    error:error=>console.log(error)
  })
}
get400Error()
{
  this.http.get(this.baseUrl+"Buggy/BadRequest").subscribe({
    next:Response=>console.log(Response),
    error:error=>console.log(error)
  })
}
get400ValidationError()
{
  this.http.get(this.baseUrl+"product/thirtyfour").subscribe({
    next:Response=>console.log(Response),
    error:error=>console.log(error)
  })
}
}
