import { Component, OnInit } from '@angular/core';
import { vehiculo } from '../modelos/vehiculo';
import { Tipo } from '../modelos/tipo';

@Component({
  selector: 'app-formcarga-vehiculo',
  templateUrl: './formcarga-vehiculo.component.html',
  styleUrls: ['./formcarga-vehiculo.component.css']
})
export class FormcargaVehiculoComponent implements OnInit {

  vehi:vehiculo;
  //tipo:Tipo;
  constructor() {
     this.vehi = new vehiculo("","","",0, Tipo.vacio  ,"");
   }

  ngOnInit() {
  }
  
  validar() {
     console.log(this.vehi);
  }



}
