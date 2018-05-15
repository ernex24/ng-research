import { ModalCargandoComponent } from './cargando/modal-cargando.component';
import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

import {ModalInformacionComponent} from './informacion/modal-informacion.component';

@Injectable()
export class ModalService {
  private bsModalRef: BsModalRef;
  private show = 0;

  constructor(private modalService: BsModalService) {}

  private config = {
      ignoreBackdropClick: true,
      animated: false,
      class: 'modal-size'
    };

  openCargando(titulo: any, imagen: any, contenido: any) {
      if (!this.show) {
        this.bsModalRef = this.modalService.show(ModalCargandoComponent, this.config);
        this.bsModalRef.content.title = titulo.value;
        this.bsModalRef.content.image = imagen.value;
        this.bsModalRef.content.texto = contenido.value;
        this.show++;
      }
  }

  openInformacion(contenido: any, config) {
      this.bsModalRef = this.modalService.show(ModalInformacionComponent, config);
      this.bsModalRef.content.texto = contenido;
  }

   closeModal()  {
       this.show--;
       if (this.show === 0) {
        this.bsModalRef.hide();
       }
   }
}
