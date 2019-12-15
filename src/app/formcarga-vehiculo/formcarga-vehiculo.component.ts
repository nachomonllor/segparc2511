import { Component, OnInit } from '@angular/core';
import { vehiculo } from '../modelos/vehiculo';
import { HttpClient } from '@angular/common/http';
import { cliente } from '../modelos/cliente';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { auto } from '../modelos/auto';
import { Router } from '@angular/router';
import { AutoService } from '../servicios/auto.service';
import { TraerautosService } from '../servicios/traerautos.service';
//import { Tipo } from '../modelos/tipo';

@Component({
  selector: 'app-formcarga-vehiculo',
  templateUrl: './formcarga-vehiculo.component.html',
  styleUrls: ['./formcarga-vehiculo.component.css']
})
export class FormcargaVehiculoComponent implements OnInit {

 
  //vehi:vehiculo;
  unAuto:auto;

  anios = new Array<number>();

  marcas: Array<string>;
  marcaSeleccionada= "";

  modelos: Array<string>;
  modeloSeleccionado = "";

  tipos = new Array<string>();

  localidades = new Array<string>();

  concesionarias = new Array<string>();

   marcasAutos:string;


   modelo:string;
   an:string;
   tipo:string;
   localidad:string;
   concesionaria:string;
 // lista:Array<vehiculo>;
  //tipo:Tipo;

   listaautos = new Array<auto>();
  

  constructor( private http: HttpClient, private as:AutoService, private ta: TraerautosService, private router: Router) {
     //this.lista = new Array<vehiculo>();
     //this.vehi = new vehiculo("","","",0, "auto"  ,"");
     

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
    
     

     //this.marcaSeleccionada = this.marcas[0];
     
     var modelosaux = ['A1', 'A2', 'A3', 'B1','B2','B3','B4', 'Q1','Q2','Q5','Q9'];
     this.modelos = new Array<string>();
     for(let i =0; i<modelosaux.length; i++) {
       this.modelos.push(modelosaux[i]);
     }

     this.tipos.push("auto");
     this.tipos.push("camioneta");
     this.tipos.push("camion");
     
     this.localidades.push("avellaneda") ;
     this.localidades.push("ezpeleta") ;
     this.localidades.push("quilmes") ;
     this.localidades.push("wilde") ;
     this.localidades.push("sarandi") ;


     this.concesionarias.push("concesionaria clio");
     this.concesionarias.push("concesionaria ford");
     this.concesionarias.push("concesionaria auto");
     this.concesionarias.push("concesionaria camion");
     this.concesionarias.push("concesionaria camioneta");
     this.concesionarias.push("concesionaria BMW");




     //this.unAuto = new auto( this.marca, this.modelo, this.an, 0,this.tipo, "", this.localidad, this.concesionaria);
     this.unAuto = new auto( "", "", "", 0,"", "", "", "");

   }

   /*
  conces: concesionaria;
  constructor(private _concesServ : ConcesionariaService) 
  {
      this.conces = new concesionaria("", "","","","","");
   }
 */

  ngOnInit() {
    //this.ta. getautos();
  }
   
  mostrar() {
    this.router.navigate(['/filtrarVehiculos']);
  }


  cargarAuto() {
    console.log(this.unAuto);

    this.as.post(this.unAuto)
    //.subscribe(token => { console.log("token desde login"+token) });
    .subscribe(a => this.listaautos.push(this.unAuto));

  }

  /*
  postAuto():Observable<any> {
    
    let cliente ={ auto:_auto }
    console.log(_auto);
    return this.http.post<any>(this.urlauto, this.unAuto)
    
    .pipe( map(token => {
      
      if(token && token.token){
         //aca guardamos en el local storage
         console.log("token desde el service" + token.token);
      }
      return token;
    
   //.pipe(map((response) => token.json()))

  }));

  
  }
  */

  


}
