import { Component, OnInit } from '@angular/core';
import { vehiculo } from '../modelos/vehiculo';
import { TraerautosService } from '../servicios/traerautos.service';
import { auto } from '../modelos/auto';

@Component({
  selector: 'app-form-mostrar',
  templateUrl: './form-mostrar.component.html',
  styleUrls: ['./form-mostrar.component.css']
})
export class FormMostrarComponent implements OnInit {

  //jugador:Jugador;
  autos: Array<auto>;
  constructor(private ts: TraerautosService) {
    
    //this.vehi.push (JSON.parse(localStorage.getItem('vehiculo')));
      this.autos = new Array<auto>();


   }
  ngOnInit() {

    this.traerdatos();
  }
   
   traerdatos() {
      this.ts.getautos().subscribe(_autos =>  {

        _autos.rta.forEach(element => {
         this.autos.push(element);
        });
      /*   console.log(_autos);
        console.log(_autos.length);
        this.autos = _autos */
      });
   }


}
