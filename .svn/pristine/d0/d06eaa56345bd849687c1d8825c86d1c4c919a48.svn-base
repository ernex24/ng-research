import { APP_CONSTANTS } from '../../app-constants';
import { IAppConstants } from '../../app-constants.interface';
import { ModalService } from '../../core/modal/modal.service';
import { UtilsAccesoService } from '../../core/utils-acceso/utils-acceso.service';
import { UtilsButtonService } from '../../core/utils-button/utils-button.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { DESBLOQUEAR_USUARIO_CONSTANTS } from './desbloquear-usuario-constants';
import { IDesbloquearUsuarioConstants } from './desbloquear-usuario-constants.interface';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs/Subject';

import {UtilsCifradorModel} from '../../core/utils-cifrador/utils-cifrador.model';
import {UtilsCifradorService} from '../../core/utils-cifrador/utils-cifrador.service';
import {StatusResponseModel} from '../../shared/status-response.model';


@Injectable()
export class DesbloquearUsuarioService {
  errorMessageDescripcionChanged = new Subject<string>();

  constructor(private httpClient: HttpClient,
    @Inject(APP_CONSTANTS) private constants: IAppConstants,
    @Inject(DESBLOQUEAR_USUARIO_CONSTANTS) private constantsDesbloquearUsuario: IDesbloquearUsuarioConstants,
    private translate: TranslateService,
    private utilsButtonService: UtilsButtonService,
    private utilsAccesoService: UtilsAccesoService,
    private dataStorageService: DataStorageService,
    private utilsCifradorService: UtilsCifradorService,
    private modalService: ModalService,
    private router: Router) {}

  desbloquearUsuario(username: string): void {
    const utilCifrador = this.utilsCifradorService.encriptarDatos(new UtilsCifradorModel(
      this.constants.SECRET_PASSPHRASE,
      this.constants.KEY_HMAC_SHA1,
      '',
      [username]));

    const idioma = this.translate.getBrowserLang() != null ? this.translate.getBrowserLang().toUpperCase() : this.constants.IDIOMA;
    utilCifrador.estructura = idioma + this.constants.HMAC_SEPARATOR + utilCifrador.arrayDatos[0];

    const hash = this.utilsCifradorService.generadorHMACPublico(utilCifrador);

    const request = {
      'ANA_Desbloquear_Usuario_Request': {
        'token': hash,
        'idioma': idioma,
        'data_01': utilCifrador.arrayDatos[0].toString(),
        'demo': false
      }
    };

    const req = new HttpRequest(this.constants.HTTP_REQUEST, this.dataStorageService.ejecutarServicio() +
                this.constantsDesbloquearUsuario.URL_DESBLOQUEAR_USUARIO, request, { reportProgress: true });
    // Realizamos la llamada al servicio
    this.httpClient.request(req).subscribe(
      (evento: HttpEvent<any>) => {
        switch (evento.type) {
          case HttpEventType.Sent:
            // Abrimos el modal de cargando mientras se esta enviando la petición
            const titulo = this.translate.get('Modal.AccesoDesbloquearUsuario');
            const imagen = this.translate.get('Modal.AccesoImagen');
            const texto = this.translate.get('Modal.AccesoTexto');

            this.modalService.openCargando(titulo, imagen, texto);
            break;
          case HttpEventType.Response:
              // Cerramos el modal de validando cuando tengamos respuesta de la peticion
              this.modalService.closeModal();
              // Recuperamos la respuesta
              const statusResponse: StatusResponseModel = { ...  evento.body.ANA_Desbloquear_Usuario_Response};
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
        this.translate.get('Comun.ErrorPeticion', { server: this.constantsDesbloquearUsuario.URL_DESBLOQUEAR_USUARIO }).subscribe(
              mensaje => {
                // Informamos del error
                this.errorMessageDescripcionChanged.next(mensaje);
              });
      });
  }
}
