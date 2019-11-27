import { Tipo } from './tipo';


export class vehiculo {
    marca:string; 
    modelo:string; 
    año:string; 
    kilometros:number;
    tipo:Tipo;
    foto:string 

    constructor(marca:string, modelo:string, año:string, kilometros:number, tipo:Tipo, foto:string) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.kilometros = kilometros;
        this.tipo = tipo;
        this.foto = foto;
    }

}