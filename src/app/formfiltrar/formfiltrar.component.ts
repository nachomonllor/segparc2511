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
  localidades = new Array<string>();

  listaOriginal:Array<auto>;//esta es la original
  tipoSeleccionado = Tipo.vacio;
  localidadSeleccionada = "avellaneda";

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

     this.localidades.push("avellaneda") ;
     this.localidades.push("ezpeleta") ;
     this.localidades.push("quilmes") ;
     this.localidades.push("wilde") ;
     this.localidades.push("sarandi") ;


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


    filtrarPorTipo() {
      // this.autos =  await this.traerdatos(); //peticion asincronica
      console.log("len: "  + this.autos.length);
      this.autos = new Array<auto>();
        console.log(this.tipoSeleccionado);

        //this.autos= this.listaOriginal.filter(item => item.tipo==this.selectedValue); 

        console.log(this.autos);

          for(let i =0; i<this.listaOriginal.length; i++) {
          if(this.tipoSeleccionado == this.listaOriginal[i].tipo ){
            this.autos.push(this.listaOriginal[i]);
          }
      }


    }

    filtrarPorLocalidad() {
      //console.log("len: "  + this.autos.length);
      this.autos = new Array<auto>();
        console.log(this.localidadSeleccionada);

        //this.autos= this.listaOriginal.filter(item => item.tipo==this.selectedValue); 

        console.log(this.autos);

          for(let i =0; i<this.listaOriginal.length; i++) {
          if(this.localidadSeleccionada == this.listaOriginal[i].localidad ){
            this.autos.push(this.listaOriginal[i]);
          }
      }
    }


}
