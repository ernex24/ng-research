import { ActualizarContrasenyaComponent } from './actualizar-contrasenya.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const actualizarContrasenyaComponentRoutes: Routes = [
  { path: '', component: ActualizarContrasenyaComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(actualizarContrasenyaComponentRoutes)
  ],
  exports: [RouterModule],
  providers: [ ]
})
export class ActualizarContrasenyaRoutingModule { }
