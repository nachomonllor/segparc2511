//import { Tipo } from './tipo';

export class auto {
    marca:string;
    modelo:string;

    an:string; 
    kilometros:number;
    tipo:string;
    foto:string;
    
    localidad:string;
    concesionaria:string;
    

    /*
    constructor(_marca:string, _modelo:string) {
        this.marca = _marca;
        this.modelo = _modelo;
    }*/

    constructor(_marca:string, _modelo:string, _an:string, _kilometros:number, _tipo:string, _foto:string, _localidad:string, _concesionaria:string) {
        this.marca = _marca;
        this.modelo = _modelo;
        this.an = _an;
        this.kilometros = _kilometros;
        this.tipo = _tipo;
        this.foto = _foto;

        this.localidad = _localidad;
        this.concesionaria = _concesionaria;

    }



}