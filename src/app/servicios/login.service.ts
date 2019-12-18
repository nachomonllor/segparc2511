import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { cliente } from './modelos/cliente';
import { Observable } from 'rxjs';
//import {HttpClient}
import { map} from 'rxjs/operators';
import { tokenName } from '@angular/compiler';
import { cliente } from '../modelos/cliente';
import { variables } from '../modelos/variables';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  variableUrl = new variables();
  private urllogin = this.variableUrl.urlBase + "login"; //"http://localhost:3003/login";

  constructor(private http: HttpClient) {

  }
  
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

  
  }
}
