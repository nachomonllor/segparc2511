import { Component, OnInit } from '@angular/core';
//import { consecionaria } from '../modelos/concesionaria';
import { ConcesionariaService } from '../servicios/concesionaria.service';
import { Concesionaria } from '../modelos/concesionaria';
import { Validators, FormControl } from '@angular/forms';

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


   
 /*
   Mobile = new FormControl('', [
    Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.minLength(4),
  ]);
  */

  constructor(private _concesServ : ConcesionariaService) 
  {
      this.conces = new Concesionaria("", "","","","","");


      this.localidades.push("avellaneda") ;
      this.localidades.push("ezpeleta") ;
      this.localidades.push("quilmes") ;
      this.localidades.push("wilde") ;
      this.localidades.push("sarandi") ;
   }

   
   numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

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
