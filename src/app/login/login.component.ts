import { Component, OnInit } from '@angular/core';
import { usuario } from '../modelos/usuario';
//import { LoginService } from '../login.service';
import { cliente } from '../modelos/cliente';
import { LoginService } from '../servicios/login.service';
import { AuthservicioService } from '../auth/authservicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  us:usuario;
  cli:cliente;

  esValido:Boolean = false;
  constructor(private ls: AuthservicioService,private router: Router) { 
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
        this.router.navigate(['/formulario']);
       } else{
         this.esValido = true;
               //Mostrar mensaje en pantalla 
               //que el usuario y contrasenia es incorrecto
       }
      });
   // console.log(this.us.nombre + " " + this.us.clave);
  }

}
