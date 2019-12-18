import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AuthGuard } from './auth/auth.guard';
import { FormcargaVehiculoComponent } from './formcarga-vehiculo/formcarga-vehiculo.component';
import { FormMostrarComponent } from './form-mostrar/form-mostrar.component';
import { FormfiltrarComponent } from './formfiltrar/formfiltrar.component';


const routes: Routes = 
[
  
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'formulario', component:FormularioComponent },
  {path: 'cargaVehiculo', component:FormcargaVehiculoComponent , canActivate: [AuthGuard] },
  {path: 'mostrarVehiculos', component:FormMostrarComponent , canActivate: [AuthGuard] },
  {path: 'filtrarVehiculos', component:FormfiltrarComponent , canActivate: [AuthGuard]}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
