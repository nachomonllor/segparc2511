import { Component, OnInit } from '@angular/core';
import { AuthservicioService } from './auth/authservicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private auth: AuthservicioService){

  }
  title = 'segparc2511';

  ngOnInit(): void {
   //this.auth.borrarToken();
  }
}
