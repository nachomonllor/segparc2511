enum Tipo{
   auto,
   camioneta, 
   camion
}

export class vehiculo {
    marca:string; 
    modelo:string; 
    año:string; 
    kilometros:number;
    tipo:Tipo;

    constructor(marca:string, modelo:string, año:string, kilometros:number, tipo:Tipo) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.kilometros = kilometros;
        this.tipo = tipo;
    }

}