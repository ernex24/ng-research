import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesoComponent } from './acceso.component';

const routes: Routes = [
    {path: '', component: AccesoComponent,
    children: [
      { path: 'login',
        loadChildren: './login/login.module#LoginModule' },
      { path: 'recuperar-contrasenya',
        loadChildren: './recuperar-contrasenya/recuperar-contrasenya.module#RecuperarContrasenyaModule'},
      { path: 'desbloquear-usuario',
        loadChildren: './desbloquear-usuario/desbloquear-usuario.module#DesbloquearUsuarioModule'},
      { path: 'validar-usuario',
        loadChildren: './validar-usuario/validar-usuario.module#ValidarUsuarioModule'},
      { path: 'actualizar-contrasenya',
        loadChildren: './actualizar-contrasenya/actualizar-contrasenya.module#ActualizarContrasenyaModule'},
      { path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoRoutingModule {
}
