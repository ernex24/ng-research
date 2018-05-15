import { environment } from '../../environments/environment';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/platform-browser';

import 'rxjs/add/operator/map';

import { APP_CONSTANTS } from '../app-constants';
import { IAppConstants } from '../app-constants.interface';
import { SesionModel } from './sesion.model';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataStorageService {
  private restServer: string = null;
  sesion: SesionModel = null;

  constructor(private httpClient: HttpClient,
    @Inject(APP_CONSTANTS) private contants: IAppConstants,
    @Inject(DOCUMENT) document: any) { }

  getRestServers(): Observable<any> {
    let hostInfoEnvironment = '';

    if (!environment.production) {
      // Estamos en el servidor de integración.
      hostInfoEnvironment = this.contants.HOST_INTEGRACION;
    }
    // Si el servidor es nulo realizo la peticion
    if (this.restServer == null) {
      // Realizo la petición para recuperar el servicio rest.
      return this.httpClient.get(hostInfoEnvironment + this.contants.URL_SERVICIOS_REST, {
        observe: 'body',
        responseType: 'json'
      })
        .map((response: any) => {
          this.restServer = response.marshallingView_SER_InfoEnvironment.value;
          // Retorno el servidor rest
          return Observable.of(true);
        }).catch((error: any) => {
          return Observable.of(false);
        });
    } else {
      return Observable.of(true);
    }
  }

  /**
   * Ejecutamos el servicio en el Servidor.
   */
  ejecutarServicio(): string {
    return this.restServer;
  }

  /**
   * Ejecutamos el servicio en nuestro Local.
   */
  ejecutarServicioLocal(): string {
     return this.contants.HOST_LOCAL;
  }
}
