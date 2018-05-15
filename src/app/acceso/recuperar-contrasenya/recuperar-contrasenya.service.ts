import { APP_CONSTANTS } from '../../app-constants';
import { IAppConstants } from '../../app-constants.interface';
import { ModalService } from '../../core/modal/modal.service';
import { UtilsButtonService } from '../../core/utils-button/utils-button.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { RECUPERAR_CONTRASENYA_CONSTANTS } from './recuperar-contrasenya-constants';
import { IRecuperarContrasenyaConstants } from './recuperar-contrasenya-constants.interface';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs/Subject';

import {StatusResponseModel} from '../../shared/status-response.model';
import {UtilsCifradorModel} from '../../core/utils-cifrador/utils-cifrador.model';
import {UtilsCifradorService} from '../../core/utils-cifrador/utils-cifrador.service';

@Injectable()
export class RecuperarContrasenyaService {
  errorMessageDescripcionChanged = new Subject<string>();

  constructor(private httpClient: HttpClient,
    @Inject(APP_CONSTANTS) private constants: IAppConstants,
    @Inject(RECUPERAR_CONTRASENYA_CONSTANTS) private constantsRecuperarContrasenya: IRecuperarContrasenyaConstants,
    private translate: TranslateService,
    private utilsButtonService: UtilsButtonService,
    private dataStorageService: DataStorageService,
    private utilsCifradorService: UtilsCifradorService,
    private modalService: ModalService) {}

  recuperarContrasenya(username: string): void {
    const utilCifrador = this.utilsCifradorService.encriptarDatos(new UtilsCifradorModel(
      this.constants.SECRET_PASSPHRASE,
      this.constants.KEY_HMAC_SHA1,
      '',
      [username]));
    const idioma = this.translate.getBrowserLang() != null ? this.translate.getBrowserLang().toUpperCase() : this.constants.IDIOMA;
    utilCifrador.estructura = idioma + this.constants.HMAC_SEPARATOR + utilCifrador.arrayDatos[0];

    const hash = this.utilsCifradorService.generadorHMACPublico(utilCifrador);

    const request = {
      'ANA_Recuperar_Contrasena_Request': {
        'token': hash,
        'idioma': idioma,
        'data_01': utilCifrador.arrayDatos[0].toString(),
        'isDemo': false
      }
    };

    const req = new HttpRequest(this.constants.HTTP_REQUEST, this.dataStorageService.ejecutarServicio() +
                this.constantsRecuperarContrasenya.URL_RECUPERAR_CONTRASENYA, request, { reportProgress: true });
    // Realizamos la llamada al servicio
    this.httpClient.request(req).subscribe(
      (evento: HttpEvent<any>) => {
        switch (evento.type) {
          case HttpEventType.Sent:
            // Abrimos el modal de cargando mientras se esta enviando la petición
            const titulo = this.translate.get('Modal.AccesoRecuperarContrasenya');
            const imagen = this.translate.get('Modal.AccesoImagen');
            const texto = this.translate.get('Modal.AccesoTexto');

            this.modalService.openCargando(titulo, imagen, texto);
            break;
          case HttpEventType.Response:
              // Cerramos el modal de validando cuando tengamos respuesta de la peticion
              this.modalService.closeModal();
              // Habilitamos el boton
              this.utilsButtonService.submitedButtonChanged.next(false);
              // Recuperamos la respuesta
              const statusResponse: StatusResponseModel = { ...  evento.body.ANA_Recuperar_Contrasena_Response};
              // Comprobamos el resultado de la peticion
              if (statusResponse.status === this.constants.STATUS_OK) {
                const config = {
                  ignoreBackdropClick: true,
                  animated: false,
                  class: 'modal-lg'
                };
                this.modalService.openInformacion(statusResponse.errorMessageDescripcion, config);

              } else {
                // Peticion erronea
                this.errorMessageDescripcionChanged.next(statusResponse.errorMessageDescripcion);
              }
        }
      },
      (error: any) => {
        // Cerramos el modal de validacion de usuario
        this.modalService.closeModal();
        // Habilitmos el boton
        this.utilsButtonService.submitedButtonChanged.next(false);
        // Recuperamos el mensaje de error generico
        this.translate.get('Comun.ErrorPeticion', { server: this.constantsRecuperarContrasenya.URL_RECUPERAR_CONTRASENYA }).subscribe(
              mensaje => {
                // Informamos del error
                this.errorMessageDescripcionChanged.next(mensaje);
              });
      });
  }
}
