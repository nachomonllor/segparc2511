import { Component, OnInit } from '@angular/core';
import { usuario } from '../modelos/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  us:usuario;
  constructor() { 
    this.us = new usuario("","");
  }

  ngOnInit() {

    

  }

  validar() {
    console.log(this.us.nombre + " " + this.us.clave);
  }

}
