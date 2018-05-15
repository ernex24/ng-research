import { IDesbloquearUsuarioConstants } from './desbloquear-usuario-constants.interface';
import { InjectionToken } from '@angular/core';


export const DESBLOQUEAR_USUARIO_DI_CONSTANTS: IDesbloquearUsuarioConstants = {
  URL_DESBLOQUEAR_USUARIO: '/SER_AP_Login/service/enviar_desbloqueo.json',
};

export let DESBLOQUEAR_USUARIO_CONSTANTS = new InjectionToken< IDesbloquearUsuarioConstants >( 'desbloquear_usuario.constants' );
