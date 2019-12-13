import { Component, OnInit } from '@angular/core';
import { vehiculo } from '../modelos/vehiculo';
import { TraerautosService } from '../servicios/traerautos.service';
import { auto } from '../modelos/auto';
import { Tipo } from '../modelos/tipo';

@Component({
  selector: 'app-form-mostrar',
  templateUrl: './form-mostrar.component.html',
  styleUrls: ['./form-mostrar.component.css']
})
export class FormMostrarComponent implements OnInit {

  //jugador:Jugador;

  vehi:vehiculo;

  autos: Array<auto>;
  
  // tipos = new Array<string>();

  //listaFiltradoTipo:Array<auto>;
  
  //selectedValue = "vacio";
  //selectedValue = Tipo.vacio;
  constructor(private ts: TraerautosService) {
    
    //this.vehi.push (JSON.parse(localStorage.getItem('vehiculo')));
     this.vehi = new vehiculo("","","",0, Tipo.vacio ,"");  
     this.autos = new Array<auto>();

     //this.tipos.push("Auto");
     //this.tipos.push("Camioneta");
      //this.tipos.push("Camion");

    // this.listaFiltradoTipo = new Array<auto>();
    //this.traerdatos();
   }
  ngOnInit() {

    this.autos = this.traerdatos();
    console.log("len: " + this.autos.length);
  }
   
   traerdatos() {
     let aux = new Array<auto>();
      this.ts.getautos().subscribe(_autos =>  {

        _autos.rta.forEach(element => {
         //this.autos.push(element);
         aux.push(element);
        });
      /*   console.log(_autos);
        console.log(_autos.length);
        this.autos = _autos */
      });
      return aux;
   }

   //mostrar = "";

   /*
   filtrarTipo() {
      //this.traerdatos();
       for(let i =0; i<this.autos.length; i++) {
            if(this.selectedValue == this.autos[i].tipo ){
                this.listaFiltradoTipo.push(this.autos[i]);
            }
       }
       for(let i =0; i<this.listaFiltradoTipo.length; i++) {
           console.log(this.listaFiltradoTipo[i].modelo);
           console.log(this.listaFiltradoTipo[i].an);
       }

   }*/



}
