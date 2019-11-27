import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormvehiculoComponent } from './formvehiculo/formvehiculo.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    LoginComponent,
    FormvehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
