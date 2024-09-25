import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Vistas/login/login.component';
import { PrincipalComponent } from './Vistas/principal/principal.component';
import { FondosComponent } from './moduloFondos/fondos/fondos.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a login
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent }, // Ruta para el componente Principal
  { path: 'fondos', component: FondosComponent }, // Ruta para Fondos
  { path: 'transacciones', component: TransaccionesComponent } // Ruta para Transacciones
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
