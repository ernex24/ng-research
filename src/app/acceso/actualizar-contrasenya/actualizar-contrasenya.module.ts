import { SharedModule } from '../../shared/shared.module';
import { CarruselModule } from '../carrusel/carrusel.module';
import { ACTUALIZAR_CONTRASENYA_CONSTANTS, ACTUALIZAR_CONTRASENYA_DI_CONSTANTS } from './actualizar-contrasenya-constants';
import { ActualizarContrasenyaRoutingModule } from './actualizar-contrasenya-routing.module';
import { ActualizarContrasenyaComponent } from './actualizar-contrasenya.component';
import { ActualizarContrasenyaService } from './actualizar-contrasenya.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ActualizarContrasenyaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ActualizarContrasenyaRoutingModule,
    TranslateModule.forChild(),
    SharedModule,
    CarruselModule
  ],
  providers: [
    ActualizarContrasenyaService,
     {
      provide: ACTUALIZAR_CONTRASENYA_CONSTANTS,
      useValue: ACTUALIZAR_CONTRASENYA_DI_CONSTANTS
    }
  ]
})
export class ActualizarContrasenyaModule { }