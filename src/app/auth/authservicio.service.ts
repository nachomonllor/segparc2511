import { Injectable } from '@angular/core';

import { cliente } from '../modelos/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//encargado del logueo y de almacenar el token en el localstorage
//metodo para identificar si el usuario esta logueado
export class AuthservicioService {
  
  private urllogin = "http://localhost:3003/login";
  isLoggedIn = false;
  //jugador:Jugador;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  token:string;

  
  constructor(private http:HttpClient) { }


  postlogin(_cli:cliente):Observable<Boolean> {
    
    let cliente ={ cliente:_cli }
    //console.log(_cli);
    return this.http.post<any>(this.urllogin, cliente)
    
    .pipe(map(token => {
      
      if(token && token.token){
         //aca guardamos en el local storage

          let tokenSinComillas = token.token;
          /*
          //esto no saca las comillas, saca el primer y ultimo caracter
          tokenSinComillas = tokenSinComillas.substring(1, tokenSinComillas.length - 2);
          console.log(token.token);
          console.log('\n');
          console.log( tokenSinComillas);
          //Hacer algo con el string tokenSinComillas
          console.log(tokenSinComillas);
          */
         localStorage.setItem('token', JSON.stringify(tokenSinComillas));
            
         this.isLoggedIn = true;
         return true;
         //console.log("token desde el service" + token.token);
      }
      this.isLoggedIn = false;
      return false;
   //.pipe(map((response) => token.json()))

  }));

  
  }


logout(): void {
  this.isLoggedIn = false;
  localStorage.setItem('token', null);
}

//Vamos a tener que usar este metodo para inyectar
//el token en las cabeceras
devolverToken(){
  localStorage.setItem('token', null);
}

borrarToken(){
  return JSON.parse(localStorage.getItem('token'));
}



 estaAutorizado() :boolean{
  this.token = JSON.parse(localStorage.getItem('token'));
   if(this.token != null &&  this.isLoggedIn ){
        return true;
   } else{
     return false;
   }

}
}
