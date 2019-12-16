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

  tipos = new Array<string>();

  localidades = new Array<string>();

  concesionarias = new Array<string>();

   //marcasAutos:string;

   marca:string;
   modelo:string;
   an:string;
   tipo:string;
   localidad:string;
   concesionaria:string;
   kilometros:number =0;
   foto:string;
 // lista:Array<vehiculo>;
  //tipo:Tipo;

   listaautos = new Array<auto>();
  
   public marcas = [
    {value:'Alfa Romeo', display:'Alfa Romeo'},
    {value:'Audi', display:'Audi'},
    {value:'BMW', display:'BMW'},
  ];
  constructor( private http: HttpClient, private as:AutoService, private ta: TraerautosService, private router: Router) {
     //this.lista = new Array<vehiculo>();
     //this.vehi = new vehiculo("","","",0, "auto"  ,"");
     

     for(let i = 1950; i<= 2019; i++) {
         this.anios.push(i);
     }


     this.tipos.push("auto");
     this.tipos.push("camioneta");
     this.tipos.push("camion");
     
     this.localidades.push("avellaneda") ;
     this.localidades.push("ezpeleta") ;
     this.localidades.push("quilmes") ;
     this.localidades.push("wilde") ;
     this.localidades.push("sarandi") ;


     this.concesionarias.push("concesionaria A");
     this.concesionarias.push("concesionaria B");
     this.concesionarias.push("concesionaria C");
     this.concesionarias.push("concesionaria D");
     this.concesionarias.push("concesionaria E");
     this.concesionarias.push("concesionaria F");




     this.unAuto = new auto( this.marca, this.modelo, this.an, this.kilometros,this.tipo, this.foto, this.localidad, this.concesionaria);
     
     //this.unAuto = new auto( "", "", "",0,
      //"", "", "", "");

   }

  // marcasAutos = new Array<string>();
  //marcasCamionetas = [];
  // modelosCamiones = new Array<string>();
   elegirVehiculo(selected) {

      this.modelos = new Array<string>();

       if(selected == "auto") {
        //  this.marcasAutos = new Array<string>();
        //  this.marcasAutos.push("Alfa Romeo");
         // this.marcasAutos.push("Audi");
         // this.marcasAutos.push("BMW");

         this.marcas = [
          {value:'Alfa Romeo', display:'Alfa Romeo'},
          {value:'Audi', display:'Audi'},
          {value:'BMW', display:'BMW'},
        ];
       }
       else if(selected == "camioneta") {
          //this.modelosCamionetas.push("Ford F-150");
          //this.modelosCamionetas.push("Honda Ridgeline");
          this.marcas = [
          {value:'Ford F-150', display:'Ford F-150'},
          {value:'Honda Ridgeline', display:'Honda Ridgeline'},
          {value:'Toyota Tundra', display:'Toyota Tundra'}];

       }
       else {

            //marcas camiones
        this.marcas = [
          {value:'Scania', display:'Scania'},
          {value:'Mercedes', display:'Mercedes'},
          {value:'Mack Trucks', display:'Mack Trucks'}];


       }
   }

   
   modelos= new Array<string>();
   //modelosCamiones = new Array<string>();
  // modelosCamionetas = new Array<string>();
   elegirModelo(selected) {
      if(selected == "Alfa Romeo") {
          this.modelos= new Array<string>();
          this.modelos.push("Alfa Romeo 1");
          this.modelos.push("Alfa Romeo 2");
          this.modelos.push("Alfa Romeo 3");
      }
      else if(selected == "Audi") {
        this.modelos= new Array<string>();
        this.modelos.push("Audi 1");
        this.modelos.push("Audi 2");
        this.modelos.push("Audi 3");
      }
      else if(selected == "BMW") {
        this.modelos= new Array<string>();
        this.modelos.push("BMW 1");
        this.modelos.push("BMW 2");
        this.modelos.push("BMW 3");
      }
     else if(selected == 'Ford F-150'  ) {
      this.modelos= new Array<string>();
      this.modelos.push("Ford F-150 1");
      this.modelos.push("Ford F-150 2");
      this.modelos.push("Ford F-150 3");
     }
     else if(selected == 'Honda Ridgeline') {
      this.modelos= new Array<string>();
      this.modelos.push("Honda Ridgeline 1");
      this.modelos.push("Honda Ridgeline 2");
      this.modelos.push("Honda Ridgeline 3");
     }
     else if(selected == 'Toyota Tundra' ) {
      this.modelos= new Array<string>();
      this.modelos.push("Toyota Tundra 1");
      this.modelos.push("Toyota Tundra 2");
      this.modelos.push("Toyota Tundra 3");
     }
     else if(selected == 'Scania') {
      this.modelos= new Array<string>();
      this.modelos.push("Scania 1");
      this.modelos.push("Scania 2");
      this.modelos.push("Scania 3");
      this.modelos.push("Scania 4");
     }
     else if(selected == 'Mercedes') {
      this.modelos= new Array<string>();
      this.modelos.push("Mercedes 1");
      this.modelos.push("Mercedes 2");
      this.modelos.push("Mercedes 3");
      this.modelos.push("Mercedes 4");
     }
     else if(selected == 'Mack Trucks' ) {
      this.modelos= new Array<string>();
      this.modelos.push("Mack Trucks 1");
      this.modelos.push("Mack Trucks 2");
     
     }




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



}
