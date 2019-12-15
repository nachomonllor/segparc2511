
import { auto } from '../modelos/auto';
//import { Tipo } from '../modelos/tipo';
import { TraerautosService } from '../servicios/traerautos.service';
import { async } from '@angular/core/testing';

import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';  
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 
import { Router } from '@angular/router';
import { Concesionaria } from '../modelos/concesionaria';

@Component({
  selector: 'app-formfiltrar',
  templateUrl: './formfiltrar.component.html',
  styleUrls: ['./formfiltrar.component.css']
})
export class FormfiltrarComponent implements OnInit {
  
  razonSocial:string='';
  tipos = new Array<string>();
  localidades = new Array<string>();
  concesionarias = new Array<string>();
  _concesionaria:Concesionaria;
  listaOriginal:Array<auto>;//esta es la original
  tipoSeleccionado = "auto";
  localidadSeleccionada = "avellaneda";
  concesionariaSeleccionada = "concesionaria tito";
  
  autos: Array<auto>; //esta filtramos
  mostrar = "";
  
  headElements = [ 'marca', 'modelo', 'año',
    'kilometros', 'tipo' , 'localidad', 'concesionaria'  ] ;

  // tipos = new Array<string>();

  //listaFiltradoTipo:Array<auto>;
  
  //selectedValue = "vacio";
  //selectedValue = Tipo.vacio;
  constructor(private ts: TraerautosService, private router: Router ) {
    
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

     this.concesionarias.push("concesionaria tito"); 
     this.concesionarias.push("concesionaria clio"); 
     this.concesionarias.push("concesionaria peugeot"); 
     this.concesionarias.push("concesionaria yamaha"); 
     this.concesionarias.push("concesionaria camion"); 
     this.concesionarias.push("concesionaria camioneta");

     

     this.listaOriginal = new Array<auto>();

     console.log("entro al constructor"); 
    
     //this.traerdatos();
     
      
    
    
   }

   ngOnInit() {
    this.traerdatos();//Se eejcuta y pueden x segundos
    this._concesionaria = JSON.parse(localStorage.getItem('concesionaria'));
    this.razonSocial = this._concesionaria.razon_social;
  
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


    filtrarPorConcesionaria() {
      //console.log("len: "  + this.autos.length);
      this.autos = new Array<auto>();
        console.log(this.localidadSeleccionada);

        //this.autos= this.listaOriginal.filter(item => item.tipo==this.selectedValue); 

        console.log(this.autos);

          for(let i =0; i<this.listaOriginal.length; i++) {
          if(this.concesionariaSeleccionada == this.listaOriginal[i].concesionaria ){
            this.autos.push(this.listaOriginal[i]);
          }
      }
    }


    //descargar PDF
    public captureScreen()  
    {  
      var data = document.getElementById('contentToConvert');  
      html2canvas(data).then(canvas => {  
        // Few necessary setting options  
        var imgWidth = 80;   
        var pageHeight = 380;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
        var position = 0;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
        pdf.save('MYPdf.pdf'); // Generated PDF   
      });  
    } 

    cargarVehiculo() {
      this.router.navigate(['/cargaVehiculo']);
    }


}
