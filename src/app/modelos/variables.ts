export class variables {

    public urlBase = 'http://localhost:3003/';

    constructor() {
      if (window.location.href.toString().includes('localhost')) {
        this.urlBase = 'http://localhost:3003/';
      } else {
        this.urlBase = 'https://intense-shelf-02357.herokuapp.com/';
      }
  
        // this.urlBase = 'http://qwaugusto-001-site5.htempurl.com/api/';
  
      if (window['__entorno'] != null) { this.urlBase = window['__entorno']}
        window['__entorno'] = this.urlBase;
    }



}