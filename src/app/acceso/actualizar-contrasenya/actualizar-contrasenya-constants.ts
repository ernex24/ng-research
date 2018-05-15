import { InjectionToken } from '@angular/core';
import { IActualizarContrasenyaConstants } from './actualizar-contrasenya-constants.interface';

export const ACTUALIZAR_CONTRASENYA_DI_CONSTANTS: IActualizarContrasenyaConstants = {
  URL_ACTUALIZAR_CONTRASENYA: '/SER_ANA_Usuarios/service/recuperar_contrasena/actualizar.json',
};

export let ACTUALIZAR_CONTRASENYA_CONSTANTS = new InjectionToken< IActualizarContrasenyaConstants >( 'actualizar-contrasenya.constants' );
