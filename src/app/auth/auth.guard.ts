import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthservicioService } from './authservicio.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private serv:AuthservicioService,private router: Router ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.serv.estaAutorizado()){
      
      return true;
     }else{
      this.router.navigate(['/login']);
      return false;
     } 
     //return this.serv.estaAutorizado();
      
  }
  
  
}
