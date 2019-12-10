import { Component, OnInit } from '@angular/core';
import { vehiculo } from '../modelos/vehiculo';

@Component({
  selector: 'app-form-mostrar',
  templateUrl: './form-mostrar.component.html',
  styleUrls: ['./form-mostrar.component.css']
})
export class FormMostrarComponent implements OnInit {

  //jugador:Jugador;
  vehi = new Array<vehiculo>();
  constructor() {
    
    this.vehi.push (JSON.parse(localStorage.getItem('vehiculo')));
   }
  ngOnInit() {
  }

}
