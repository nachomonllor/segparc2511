import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { auto } from '../modelos/auto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  private urlauto = "http://localhost:3003/auto";

  constructor(private http: HttpClient) {

  }
  
  post(_auto: auto):Observable<any> {
    
    let a ={ cliente: _auto }
    console.log(_auto);
    return this.http.post<any>(this.urlauto, a)
    


  }
}
