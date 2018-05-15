import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RecuperarContrasenyaRoutingModule } from './recuperar-contrasenya-routing.module';
import { RecuperarContrasenyaComponent } from './recuperar-contrasenya.component';
import { SharedModule } from '../../shared/shared.module';
import { CarruselModule } from '../carrusel/carrusel.module';
import { RECUPERAR_CONTRASENYA_CONSTANTS, RECUPERAR_CONTRASENYA_DI_CONSTANTS } from './recuperar-contrasenya-constants';
import { RecuperarContrasenyaService } from './recuperar-contrasenya.service';

@NgModule({
  declarations: [
    RecuperarContrasenyaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecuperarContrasenyaRoutingModule,
    TranslateModule.forChild(),
    SharedModule,
    CarruselModule
  ],

  providers: [
    RecuperarContrasenyaService,
    {
      provide: RECUPERAR_CONTRASENYA_CONSTANTS,
      useValue: RECUPERAR_CONTRASENYA_DI_CONSTANTS
    }
  ]

})
export class RecuperarContrasenyaModule {}
