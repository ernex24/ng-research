import { InjectionToken } from '@angular/core';
import { IRecuperarContrasenyaConstants } from './recuperar-contrasenya-constants.interface';

export const RECUPERAR_CONTRASENYA_DI_CONSTANTS: IRecuperarContrasenyaConstants = {
  URL_RECUPERAR_CONTRASENYA: '/SER_AP_Login/service/recuperar_contrasena.json',
};

export let RECUPERAR_CONTRASENYA_CONSTANTS = new InjectionToken< IRecuperarContrasenyaConstants >( 'recuperar_contrasenya.constants' );
