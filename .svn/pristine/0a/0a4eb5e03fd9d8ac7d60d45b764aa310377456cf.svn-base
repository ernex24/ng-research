import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DesbloquearUsuarioRoutingModule } from './desbloquear-usuario-routing.module';
import { DesbloquearUsuarioComponent } from './desbloquear-usuario.component';
import { CarruselModule } from '../carrusel/carrusel.module';
import { DESBLOQUEAR_USUARIO_CONSTANTS, DESBLOQUEAR_USUARIO_DI_CONSTANTS } from './desbloquear-usuario-constants';
import { DesbloquearUsuarioService } from './desbloquear-usuario.service';

@NgModule({
  declarations: [
    DesbloquearUsuarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DesbloquearUsuarioRoutingModule,
    TranslateModule.forChild(),
    SharedModule,
    CarruselModule
  ],
  providers: [
    DesbloquearUsuarioService,
    {
      provide: DESBLOQUEAR_USUARIO_CONSTANTS,
      useValue: DESBLOQUEAR_USUARIO_DI_CONSTANTS
    }
  ]
})
export class DesbloquearUsuarioModule {}
