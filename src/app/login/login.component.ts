import { Component, OnInit } from '@angular/core';
import { usuario } from '../modelos/usuario';
//import { LoginService } from '../login.service';
import { cliente } from '../modelos/cliente';
import { LoginService } from '../servicios/login.service';
import { AuthservicioService } from '../auth/authservicio.service';
import { Router } from '@angular/router';
import { ConcesionariaService } from '../servicios/concesionaria.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  us:usuario;
  cli:cliente;

  esValido:Boolean = false;
  constructor(private ls: AuthservicioService,private router: Router,
   private concesionaria: ConcesionariaService ) { 
    this.us = new usuario("","");
    this.cli = new cliente("", "");
  }

  ngOnInit() {

    

  }

  validar() {
    this.cli.user = this.us.nombre;
    this.cli.pass=this.us.clave;
    this.ls.postlogin(this.cli)
    .subscribe(resultado => {
       if(resultado){
        this.router.navigate(['/filtrarVehiculos']);
       } else{
         this.esValido = true;
               //Mostrar mensaje en pantalla 
               //que el usuario y contrasenia es incorrecto
       }
      });

      this.concesionaria.getConcesionaria(this.cli).
      subscribe(resp => {
        
  
          resp.rta.forEach(element => {
           
            if(element.user==this.cli.user && element.pass==this.cli.pass){
              localStorage.setItem('concesionaria', JSON.stringify(element));
            }
    
           });
    });;
   // console.log(this.us.nombre + " " + this.us.clave);
  }

}
