import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { ModalInformacionComponent} from './modal-informacion.component';

@NgModule({
  declarations: [
    ModalInformacionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  entryComponents: [
    ModalInformacionComponent
  ],
})
export class ModalInformacionModule {}
