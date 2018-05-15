import { InjectionToken } from '@angular/core';
import { ILoginConstants } from './login-constants.interface';

export const LOGIN_DI_CONSTANTS: ILoginConstants = {

  URL_LOGIN: '/SER_AP_Login/service/real/login.json',
  URL_LOG_FRONT: '/SER_DEL_Log_Front/service/log_Front.json',
  LOGIN: 'Login',
  ORIGEN: 'O',
  URL_LOGIN_TOKEN: '/SER_ANA_LoginToken/service/login/token.json',
};

export let LOGIN_CONSTANTS = new InjectionToken< ILoginConstants >( 'login.constants' );
