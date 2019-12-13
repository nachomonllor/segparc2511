import { Component, OnInit } from '@angular/core';
import { auto } from '../modelos/auto';
import { Tipo } from '../modelos/tipo';
import { TraerautosService } from '../servicios/traerautos.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-formfiltrar',
  templateUrl: './formfiltrar.component.html',
  styleUrls: ['./formfiltrar.component.css']
})
export class FormfiltrarComponent implements OnInit {
  tipos = new Array<string>();
  listaOriginal:Array<auto>;//esta es la original
  selectedValue = Tipo.vacio;
  autos: Array<auto>; //esta filtramos
  
   mostrar = "";

  // tipos = new Array<string>();

  //listaFiltradoTipo:Array<auto>;
  
  //selectedValue = "vacio";
  //selectedValue = Tipo.vacio;
  constructor(private ts: TraerautosService) {
    
    //this.vehi.push (JSON.parse(localStorage.getItem('vehiculo')));
     //this.vehi = new vehiculo("","","",0, Tipo.vacio ,"");  
     this.autos = new Array<auto>();

     this.tipos.push("auto");
     this.tipos.push("camioneta");
     this.tipos.push("camion");

     this.listaOriginal = new Array<auto>();

     console.log("entro al constructor"); 
    
     //this.traerdatos();
     

    
    
   }

   ngOnInit() {

    this.traerdatos();//Se eejcuta y pueden x segundos
    
/*     console.log("entro al ngOnInit");
    //NO ENTRA A ESTE FOR PORQUE SI AUTOS.LENGTH FUERA CERO
    console.log("len : " + this.autos.length);
    for(let i =0; i<this.autos.length; i++) {
      console.log("entro al for"); 
     if(this.selectedValue == this.autos[i].tipo ){

          this.listaFiltradoTipo.push(this.autos[i]);
      }
 } */


  }
   
  traerdatos() {
    //let aux = new Array<auto>();
     this.ts.getautos().subscribe(_autos =>  {

      _autos.rta.forEach(element => {
        //this.autos.push(element);
        this.autos.push(element);

       });
       this.listaOriginal = this.autos;
       console.log(this.autos);       
  });
}


    onChange() {
    // this.autos =  await this.traerdatos(); //peticion asincronica
     console.log("len: "  + this.autos.length);
     this.autos = new Array<auto>();
       console.log(this.selectedValue);

       //this.autos= this.listaOriginal.filter(item => item.tipo==this.selectedValue); 

       console.log(this.autos);

        for(let i =0; i<this.listaOriginal.length; i++) {
        if(this.selectedValue == this.listaOriginal[i].tipo ){
           this.autos.push(this.listaOriginal[i]);
        }
   }

    //this.traerdatos();
  /*    for(let i =0; i<this.autos.length; i++) {
          if(this.selectedValue == this.autos[i].tipo ){
              this.listaFiltradoTipo.push(this.autos[i]);
          }
     }
     for(let i =0; i<this.listaFiltradoTipo.length; i++) {
         console.log(this.listaFiltradoTipo[i].modelo);
         console.log(this.listaFiltradoTipo[i].an);

         this.mostrar += this.listaFiltradoTipo[i].modelo
                      +""+ this.listaFiltradoTipo[i].an;
     } */

 }


}