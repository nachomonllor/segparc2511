import { Component, OnInit } from '@angular/core';
import { usuario } from '../modelos/usuario';
import { LoginService } from '../login.service';
import { cliente } from '../modelos/cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  us:usuario;
  cli:cliente;
  constructor(private ls: LoginService) { 
    this.us = new usuario("","");
    this.cli = new cliente("", "");
  }

  ngOnInit() {

    

  }

  validar() {
    this.cli.user = this.us.nombre;
    this.cli.pass=this.us.clave;
    this.ls.postlogin(this.cli)
    .subscribe(token => { console.log("token desde login"+token) });
   // console.log(this.us.nombre + " " + this.us.clave);
  }

}
