import { APP_CONSTANTS } from '../../app-constants';
import { IAppConstants } from '../../app-constants.interface';
import * as CryptoJS from 'crypto-js';
import { UtilsCifradorModel } from './utils-cifrador.model';
import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class UtilsCifradorService {

  constructor( private translate: TranslateService,
        @Inject(APP_CONSTANTS) private constants: IAppConstants) {}

  encriptarDatos(utilsCifradorModel: UtilsCifradorModel) {
    if ( utilsCifradorModel.key != null) {
      utilsCifradorModel.key = CryptoJS.enc.Utf8.parse(utilsCifradorModel.key);
    }

    if ( utilsCifradorModel.key2 != null) {
      utilsCifradorModel.key2 = CryptoJS.enc.Utf8.parse(utilsCifradorModel.key2);
    }

    if ( utilsCifradorModel.base != null) {
      utilsCifradorModel.base = CryptoJS.enc.Utf8.parse(utilsCifradorModel.base);
    }

    if (utilsCifradorModel.arrayDatos != null && utilsCifradorModel.arrayDatos.length > 0) {
       for (const dato in utilsCifradorModel.arrayDatos) {
        utilsCifradorModel.arrayDatos[dato] = CryptoJS.AES.encrypt(utilsCifradorModel.arrayDatos[dato],
          utilsCifradorModel.key, { iv: utilsCifradorModel.base });
       }
    }

    return utilsCifradorModel;
  }

  generadorHMACPublico(utilsCifradorModel: UtilsCifradorModel): string {
    const cadena = encodeURIComponent(utilsCifradorModel.estructura);

    return CryptoJS.HmacSHA1(cadena, utilsCifradorModel.key2).toString(CryptoJS.enc.Base64).replace(/[/]/g, '_');
  }

  private generadorHMACPrivado(esctructura: string, id: string, pin: string): string {
    const cadena = encodeURIComponent(esctructura);

    return CryptoJS.HmacSHA1(cadena , pin).toString(CryptoJS.enc.Base64).replace(/[/]/g, '_');
  }

   getToken(id: string, username: string, pin: string): string {
    const idioma = this.translate.getBrowserLang() != null ? this.translate.getBrowserLang().toUpperCase() : this.constants.IDIOMA;
    const estructura = idioma + this.constants.HMAC_SEPARATOR + id + this.constants.HMAC_SEPARATOR + username;

    return this.generadorHMACPrivado(estructura, id, pin);
  }
}
