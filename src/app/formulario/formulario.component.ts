import { Component, OnInit } from '@angular/core';
import { consecionaria } from '../modelos/consecionaria';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

//Creamos un objeto
//  email:string;
 // password:string;

 consec: consecionaria;


  constructor() 
  {
      this.consec = new consecionaria("", "");
   }



  ngOnInit() {
  }

  validar() {
    //console.log("hola");
    console.log(this.consec.email  + " " + this.consec.clave);

  }


}
