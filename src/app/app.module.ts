import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormcargaVehiculoComponent } from './formcarga-vehiculo/formcarga-vehiculo.component';

import { HttpClientModule } from '@angular/common/http';
import { FormMostrarComponent } from './form-mostrar/form-mostrar.component';
//import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormfiltrarComponent } from './formfiltrar/formfiltrar.component';
import { DetallevehiculoComponent } from './detallevehiculo/detallevehiculo.component';
import { ConversorpdfComponent } from './conversorpdf/conversorpdf.component';

import { WavesModule, TableModule } from 'angular-bootstrap-md';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule
} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    LoginComponent,
    
    FormcargaVehiculoComponent,
    
    FormMostrarComponent,
    
    FormfiltrarComponent,
    
    DetallevehiculoComponent,
    
    ConversorpdfComponent,

  //  MatSelectModule

  ],
  imports: [
   // BrowserModule,
    //AppRoutingModule,
    FormsModule,
    //HttpClientModule,
    //BrowserAnimationsModule,


    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    WavesModule, TableModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
