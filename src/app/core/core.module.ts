import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { DataStorageService } from '../shared/data-storage.service';
import { APP_CONSTANTS, APP_DI_CONSTANTS } from '../app-constants';
import { ModalCargandoModule } from './modal/cargando/modal-cargando.module';
import { ModalService } from './modal/modal.service';
import { UtilsAccesoService } from './utils-acceso/utils-acceso.service';
import { UtilsButtonService } from './utils-button/utils-button.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import {LoginGuard} from '../acceso/login/login.guard';
import {UtilsCifradorService} from './utils-cifrador/utils-cifrador.service';
import {LOGIN_CONSTANTS, LOGIN_DI_CONSTANTS} from '../acceso/login/login-constants';
import {LoginTokenService} from '../acceso/login/login-token.service';
import {ModalInformacionModule} from './modal/informacion/modal-informacion.module';


@NgModule({
  imports: [
    AppRoutingModule,
    ModalModule.forRoot(),
    ModalCargandoModule,
    ModalInformacionModule
  ],
  exports: [
    AppRoutingModule,
    ModalCargandoModule,
    ModalInformacionModule
  ],
  providers: [
    DataStorageService,
    ModalService,
    UtilsButtonService,
   {
      provide: APP_CONSTANTS,
      useValue: APP_DI_CONSTANTS
    },
    UtilsAccesoService,
    UtilsCifradorService,
    LoginTokenService,
    {
      provide: LOGIN_CONSTANTS,
      useValue: LOGIN_DI_CONSTANTS
    },
    LoginGuard
  ],
})
export class CoreModule {}