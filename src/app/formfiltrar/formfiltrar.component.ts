import { Component, OnInit } from '@angular/core';
import { auto } from '../modelos/auto';
import { Tipo } from '../modelos/tipo';
import { TraerautosService } from '../servicios/traerautos.service';

@Component({
  selector: 'app-formfiltrar',
  templateUrl: './formfiltrar.component.html',
  styleUrls: ['./formfiltrar.component.css']
})
export class FormfiltrarComponent implements OnInit {
  tipos = new Array<string>();
  listaFiltradoTipo:Array<auto>;
  selectedValue = Tipo.vacio;
  autos: Array<auto>;
  
   mostrar = "";

  // tipos = new Array<string>();

  //listaFiltradoTipo:Array<auto>;
  
  //selectedValue = "vacio";
  //selectedValue = Tipo.vacio;
  constructor(private ts: TraerautosService) {
    
    //this.vehi.push (JSON.parse(localStorage.getItem('vehiculo')));
     //this.vehi = new vehiculo("","","",0, Tipo.vacio ,"");  
     this.autos = new Array<auto>();

     this.tipos.push("Auto");
     this.tipos.push("Camioneta");
     this.tipos.push("Camion");

     this.listaFiltradoTipo = new Array<auto>();

     console.log("entro al constructor"); 
    
     //this.traerdatos();
     

    
    
   }

   ngOnInit() {

    this.autos = this.traerdatos();
    
    console.log("entro al ngOnInit");
    //NO ENTRA A ESTE FOR PORQUE SI AUTOS.LENGTH FUERA CERO
    console.log("len : " + this.autos.length);
    for(let i =0; i<this.autos.length; i++) {
      console.log("entro al for"); 
     if(this.selectedValue == this.autos[i].tipo ){

          this.listaFiltradoTipo.push(this.autos[i]);
      }
 }


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


   onChange() {
     this.autos = this.traerdatos();
     console.log(this.autos.length);
    this.listaFiltradoTipo = new Array<auto>();
    //this.traerdatos();
     for(let i =0; i<this.autos.length; i++) {
          if(this.selectedValue == this.autos[i].tipo ){
              this.listaFiltradoTipo.push(this.autos[i]);
          }
     }
     for(let i =0; i<this.listaFiltradoTipo.length; i++) {
         console.log(this.listaFiltradoTipo[i].modelo);
         console.log(this.listaFiltradoTipo[i].an);

         this.mostrar += this.listaFiltradoTipo[i].modelo
                      +""+ this.listaFiltradoTipo[i].an;
     }

 }


}
