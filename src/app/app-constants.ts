import { InjectionToken } from '@angular/core';
import { IAppConstants } from './app-constants.interface';

export const APP_DI_CONSTANTS: IAppConstants = {

  HOST_INTEGRACION: 'http://172.16.2.5',
  HOST_LOCAL: 'http://localhost:8080',
  URL_SERVICIOS_REST: '/SER_InfoEnvironment/service/environment/0117/ES.json',

  SECRET_PASSPHRASE: '34ty567u3y8i9o0i6yhnfnmd',
  // tslint:disable-next-line:max-line-length
  KEY_HMAC_SHA1: 'W1gM2otJzpjcKMZt7jWVRbYRjQDs4JMrk7Gf0saivsSZKyxO0B5D1bwqXdFqCAROBSJNQGaxs92rORLtwz3SeRYn5DdS28nxOYzbnVXvLuf5DKbOO5Fx8suLLcbmrLprGmCxQXOzEd0qecGLLnkFwGmm1dk19ze3O5hnA9uPznDFEjcOa70GcCSfcNmqsLiSRyZ6VtkO',

  IDIOMA: 'ES',
  HMAC_SEPARATOR: '--',

  STATUS_OK: 'OK',
  STATUS_ERROR: 'ERROR',

  HTTP_REQUEST: 'POST',

  TRUE: 'true',
  FALSE: 'false'
};

export let APP_CONSTANTS = new InjectionToken< IAppConstants >( 'app.contants' );
