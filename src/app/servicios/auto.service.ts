import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { auto } from '../modelos/auto';
import { Observable } from 'rxjs';
import { AuthservicioService } from '../auth/authservicio.service';
import { variables } from '../modelos/variables';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  v = new variables();
  private urlauto =  this.v.urlBase + "auto"; //"http://localhost:3003/auto";
  
  //variableUrl:variables = new variables();

  constructor(private http: HttpClient, private auth:AuthservicioService) {
     this.v = new variables();
  }
  
  
   
   /*  return this.http.get<any>(this.url,{
      headers: new HttpHeaders().set('token',token ),
    }); */


  post(_auto: auto):Observable<any> {
    let token =this.auth.devolverToken(); 
    let a ={ auto: _auto }
    console.log(JSON.stringify(_auto));
    /*return this.http.post<any>(this.urlauto, a,{
      headers: new HttpHeaders().set('token',token ),
    })
    */
    return this.http.post<any>(this.v.urlBase + "auto" , a,{
      headers: new HttpHeaders().set('token',token ),
    })


  }
}
