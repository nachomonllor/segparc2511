import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { concesionaria } from '../modelos/concesionaria';


@Injectable({
  providedIn: 'root'
})
export class ConcesionariaService {

  private urllogin = "http://localhost:3003/clientes";

  constructor(private http: HttpClient) {

  }
  
  post(_conces: concesionaria):Observable<any> {
    
    let concesionaria ={ cliente: _conces }
    console.log(_conces);
    return this.http.post<any>(this.urllogin, concesionaria)
    


  }
}
