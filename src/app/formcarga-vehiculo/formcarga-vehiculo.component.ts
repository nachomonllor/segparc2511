import { Component, OnInit } from '@angular/core';
import { vehiculo } from '../modelos/vehiculo';
//import { Tipo } from '../modelos/tipo';

@Component({
  selector: 'app-formcarga-vehiculo',
  templateUrl: './formcarga-vehiculo.component.html',
  styleUrls: ['./formcarga-vehiculo.component.css']
})
export class FormcargaVehiculoComponent implements OnInit {

 
  vehi:vehiculo;

 // lista:Array<vehiculo>;
  //tipo:Tipo;
  constructor() {
     //this.lista = new Array<vehiculo>();
     this.vehi = new vehiculo("","","",0, "auto"  ,"");

   }

  ngOnInit() {
  }
  
  validar() {
     console.log(this.vehi);
    // this.lista.push(this.vehi);
    //--------------------
    // localStorage.setItem('vehiculo', JSON.stringify(this.lista));
     //localStorage.setItem('vehiculo', JSON.stringify(this.vehi));


  }
   


}
