import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { environment } from '../../../environments/environment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';

import { LegalComponent } from './legal/legal.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { TerminosComponent } from './terminos/terminos.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class FooterComponent implements OnInit {
  modalRef: BsModalRef;
  fecha: string;
  version: string;
  private config = {
    ignoreBackdropClick: false,
    animated: false,
    class: 'modalwidth'
  };
  constructor(private modalService: BsModalService,
    ) {}

  ngOnInit(): void {
    this.fecha = new Date().getFullYear().toString();
    this.version = environment.version.toString();
  }
  openModal(params: string) {
     switch (params) {
      case 'legal':
         this.modalRef = this.modalService.show( LegalComponent, this.config );
         break;
      case 'privacidad':
         this.modalRef = this.modalService.show( PrivacidadComponent, this.config  );
         break;
      case 'terminos':
         this.modalRef = this.modalService.show( TerminosComponent,  this.config  );
         break;
    }
  }
}
