import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Concesionaria } from '../modelos/concesionaria';
import { cliente } from '../modelos/cliente';


@Injectable({
  providedIn: 'root'
})
export class ConcesionariaService {

  private urllogin = "http://localhost:3003/clientes";

  constructor(private http: HttpClient) {

  }
  
  post(_conces: Concesionaria):Observable<any> {
    
    let concesionaria ={ cliente: _conces }
    console.log(_conces);
    return this.http.post<any>(this.urllogin, concesionaria)
    


  }

  getConcesionaria(_cli:cliente){


    return this.http.get<any>(this.urllogin);

  }
}

