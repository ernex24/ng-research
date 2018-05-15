import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer.component';
import { SharedModule } from '../../shared/shared.module';

import { ModalModule } from 'ngx-bootstrap';
import { LegalComponent } from './legal/legal.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { TerminosComponent } from './terminos/terminos.component';

@NgModule({
  declarations: [
    FooterComponent, LegalComponent, PrivacidadComponent, TerminosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModalModule.forRoot()
  ],
  exports: [
    FooterComponent
  ],
  entryComponents: [
    LegalComponent, PrivacidadComponent, TerminosComponent
  ]
})
export class FooterModule {}
