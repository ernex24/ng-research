import { APP_CONSTANTS } from '../../app-constants';
import { IAppConstants } from '../../app-constants.interface';
import { ModalService } from '../../core/modal/modal.service';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { UtilsButtonService } from '../../core/utils-button/utils-button.service';
import { UtilsCifradorModel } from '../../core/utils-cifrador/utils-cifrador.model';
import { UtilsCifradorService } from '../../core/utils-cifrador/utils-cifrador.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { ACTUALIZAR_CONTRASENYA_CONSTANTS } from './actualizar-contrasenya-constants';
import { IActualizarContrasenyaConstants } from './actualizar-contrasenya-constants.interface';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs/Subject';
import {StatusResponseModel} from '../../shared/status-response.model';

@Injectable()
export class ActualizarContrasenyaService {

  errorMessageDescripcionChanged = new Subject<string>();

  constructor(private translate: TranslateService,
    private httpClient: HttpClient,
    @Inject(APP_CONSTANTS) private constants: IAppConstants,
    @Inject(ACTUALIZAR_CONTRASENYA_CONSTANTS) private constantsActualizar: IActualizarContrasenyaConstants,
    private utilsButtonService: UtilsButtonService,
    private dataStorageService: DataStorageService,
    private utilsCifradorService: UtilsCifradorService,
    private modalService: ModalService,
    private router: Router) { }

  actualizarContrasenya(passwordNew: string, id_link: string, idioma: string, ) {
     const utilCifrador = this.utilsCifradorService.encriptarDatos(new UtilsCifradorModel(
       this.constants.SECRET_PASSPHRASE,
       this.constants.KEY_HMAC_SHA1,
      '',
      [passwordNew]));

    utilCifrador.estructura = idioma + this.constants.HMAC_SEPARATOR + utilCifrador.arrayDatos[0];

    const hash = this.utilsCifradorService.generadorHMACPublico(utilCifrador);

    const request = {
      'ANA_Actualizar_Contrasena_Request': {
        'token': hash,
        'idioma': idioma,
        'idLink': id_link,
        'data_01': utilCifrador.arrayDatos[0].toString(),
      }
    };

    const req = new HttpRequest(this.constants.HTTP_REQUEST, this.dataStorageService.ejecutarServicio()
                + this.constantsActualizar.URL_ACTUALIZAR_CONTRASENYA, request, { reportProgress: true });
    // Realizamos la llamada Request
    this.httpClient.request(req).subscribe(
      (evento: HttpEvent<any>) => {
        switch (evento.type) {
          case HttpEventType.Sent:
            // Abrimos el modal de cargando mientras se esta enviando la petición
            const titulo = this.translate.get('Modal.AccesoActualizandoContrasenya');
            const imagen = this.translate.get('Modal.AccesoImagen');
            const texto = this.translate.get('Modal.AccesoTexto');

            this.modalService.openCargando(titulo, imagen, texto);
            break;

          case HttpEventType.Response: {
            // Cerramos el modal de cargando cuando tenemos la respuesta
            this.modalService.closeModal();
            // Habilitamos el boton
            this.utilsButtonService.submitedButtonChanged.next(false);
            // Recuperamos la respuesta
            const statusResponse: StatusResponseModel = { ...  evento.body.ANA_Actualizar_Contrasena_Response};
            // Comprobamos el resultado de la llamada Request
            if ( statusResponse.status === this.constants.STATUS_OK) {
              const config = {
                ignoreBackdropClick: true,
                animated: false,
                class: 'modal-lg'
              };
              this.modalService.openInformacion(statusResponse.errorMessageDescripcion, config);
            } else {
              this.errorMessageDescripcionChanged.next(statusResponse.errorMessageDescripcion);
            }
          }
        }
      },
      (error: any) => {
        this.modalService.closeModal();
        // Habilitamos el boton
        this.utilsButtonService.submitedButtonChanged.next(false);
        // Recuperamos el mensaje de error genérico
        this.mostrarError(this.constantsActualizar.URL_ACTUALIZAR_CONTRASENYA);
      });
  }

   private mostrarError(error: string): void {
    // Recuperamos el mensaje de error genérico
    this.translate.get('Comun.ErrorPeticion', { server: error }).subscribe(
      mensaje => {
        // Informamos del error
        this.errorMessageDescripcionChanged.next(mensaje);
       });
  }

}
