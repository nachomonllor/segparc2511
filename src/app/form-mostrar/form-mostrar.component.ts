

import { vehiculo } from '../modelos/vehiculo';
import { TraerautosService } from '../servicios/traerautos.service';
import { auto } from '../modelos/auto';
//import { Tipo } from '../modelos/tipo';

import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';  
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-form-mostrar',
  templateUrl: './form-mostrar.component.html',
  styleUrls: ['./form-mostrar.component.css']
})
export class FormMostrarComponent implements OnInit {

  //jugador:Jugador;

  vehi:vehiculo;

  autos: Array<auto>;
  

  headElements = ['marca', 'modelo', 'año',
    'kilometros', 'tipo', 'foto'];

  // tipos = new Array<string>();

  //listaFiltradoTipo:Array<auto>;
  
  //selectedValue = "vacio";
  //selectedValue = Tipo.vacio;
  constructor(private ts: TraerautosService) {
    
    //this.vehi.push (JSON.parse(localStorage.getItem('vehiculo')));
     this.vehi = new vehiculo("","","",0, "auto" ,"");  
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




   

}
