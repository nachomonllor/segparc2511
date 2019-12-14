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

  anios = new Array<number>();

  marcas: Array<string>;
  marcaSeleccionada= "";
  
  modelos: Array<string>;
  modeloSeleccionado = "";
 // lista:Array<vehiculo>;
  //tipo:Tipo;
  constructor() {
     //this.lista = new Array<vehiculo>();
     this.vehi = new vehiculo("","","",0, "auto"  ,"");

     for(let i = 1950; i<= 2019; i++) {
         this.anios.push(i);
     }

     this.marcas = new Array<string>();
    const marcasaux = [
                'Abarth',	'Alfa Romeo',	'Aston Martin',	'Audi',	'Bentley',
                'BMW'	,'Cadillac',	'Caterham'	,'Chevrolet'	,'Citroen',
                'Dacia',	'Ferrari',	'Fiat'	,'Ford',	'Honda',
                'Infiniti',	'Isuzu'	,'Iveco',	'Jaguar'	,'Jeep',
                'Kia'	,	 'Lamborghini',	
                'Peugeot',	'Piaggio',	'Porsche',	'Renault'];
      for(let i =0; i< marcasaux.length; i++) {
          this.marcas.push(marcasaux[i]);
      }
    
     this.marcaSeleccionada = this.marcas[0];
     
     var modelosaux = ['A1', 'A2', 'A3', 'B1','B2','B3','B4', 'Q1','Q2','Q5','Q9'];
     this.modelos = new Array<string>();
     for(let i =0; i<modelosaux.length; i++) {
       this.modelos.push(modelosaux[i]);
     }


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
