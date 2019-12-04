import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormcargaVehiculoComponent } from './formcarga-vehiculo/formcarga-vehiculo.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    LoginComponent,
    
    FormcargaVehiculoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
