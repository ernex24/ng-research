import { SharedModule } from '../../shared/shared.module';
import { CarruselModule } from '../carrusel/carrusel.module';
import { VALIDAR_USUARIO_CONSTANTS, VALIDAR_USUARIO_DI_CONSTANTS } from './validar-usuario-constants';
import { ValidarUsuarioRoutingModule } from './validar-usuario-routing.module';
import { ValidarUsuarioComponent } from './validar-usuario.component';
import { ValidarUsuarioService } from './validar-usuario.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
   ValidarUsuarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidarUsuarioRoutingModule,
    TranslateModule.forChild(),
    SharedModule,
    CarruselModule
  ],
  providers: [
    ValidarUsuarioService,
    {
      provide: VALIDAR_USUARIO_CONSTANTS,
      useValue: VALIDAR_USUARIO_DI_CONSTANTS
    }
  ]
})
export class ValidarUsuarioModule { }
