import { Component, OnInit } from '@angular/core';
//import { consecionaria } from '../modelos/concesionaria';
import { ConcesionariaService } from '../servicios/concesionaria.service';
import { Concesionaria } from '../modelos/concesionaria';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

//Creamos un objeto
//  email:string;
 // password:string;

 conces: Concesionaria;

   localidades = new Array<string>();
   
  constructor(private _concesServ : ConcesionariaService) 
  {
      this.conces = new Concesionaria("", "","","","","");


      this.localidades.push("avellaneda") ;
      this.localidades.push("ezpeleta") ;
      this.localidades.push("quilmes") ;
      this.localidades.push("wilde") ;
      this.localidades.push("sarandi") ;
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
