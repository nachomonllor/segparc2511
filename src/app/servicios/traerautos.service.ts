import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { vehiculo } from '../modelos/vehiculo';
import { auto } from '../modelos/auto';
import { AuthservicioService } from '../auth/authservicio.service';

@Injectable({
  providedIn: 'root'
})
export class TraerautosService {

  constructor(private http: HttpClient, private auth:AuthservicioService) { }

/*
  postlogin(_cli:cliente):Observable<any> {
    
    let cliente ={ cliente:_cli }
    console.log(_cli);
    return this.http.post<any>(this.urllogin, cliente)
    
    .pipe( map(token => {
      
      if(token && token.token){
         //aca guardamos en el local storage
         console.log("token desde el service" + token.token);
      }
      return token;
   //.pipe(map((response) => token.json()))

  }));
  */

   url = "http://localhost:3003/auto";

   getautos():Observable<any> {
     
    let token =this.auth.devolverToken(); 
    console.log(token);
    return this.http.get<any>(this.url,{
      headers: new HttpHeaders().set('token',token ),
    });
    /*
    .pipe( map(token => {
      
      if(token && token.token){
         //aca guardamos en el local storage
         console.log("token desde el service" + token.token);
      }
      return token; */

   }


}
