import { Component, OnInit } from '@angular/core';
//import { consecionaria } from '../modelos/concesionaria';
import { ConcesionariaService } from '../servicios/concesionaria.service';
import { concesionaria } from '../modelos/concesionaria';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

//Creamos un objeto
//  email:string;
 // password:string;

 conces: concesionaria;


  constructor(private _concesServ : ConcesionariaService) 
  {
      this.conces = new concesionaria("", "","","","","");
   }



  ngOnInit() {
  }

  validar() {
    //console.log("hola");
    console.log(this.conces.email  + " " + this.conces.pass);

    this._concesServ.post(this.conces)
    .subscribe(token => { console.log("token desde login"+token) });
    

  }


}
