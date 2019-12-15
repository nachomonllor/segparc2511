export class Concesionaria {

    /*
    public email:string;
    public clave:string;

    constructor(email:string, clave:string) {
        this.email = email;
        this.clave = clave;
    }
    */

    /*
    "_id": "5de9a92f6b55b11fc8c2125f",
    "user": "juan",
    "pass": "jose1",
    "email": "",
    "razón_social": "",
    "teléfono": "",
    "localidad": "",
    "clave": "",
    "ip": "::1"*/

        user:string;
        pass:string;
        email:string;
        razon_social:string;
        telefono:string;
        localidad:string;
        
        constructor(_user:string, _pass:string, _email:string,
            razon_social:string, _telefono:string, _localidad:string) { 
                this.user =_user;
                this.pass = _pass;
                this.email = _email;
                this.razon_social =razon_social;
                this.telefono = _telefono;
                this.localidad = _localidad;
        }





}