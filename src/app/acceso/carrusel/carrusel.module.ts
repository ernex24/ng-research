import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap';

import { CarruselComponent } from './carrusel.component';
import { SharedModule } from '../../shared/shared.module';
import { CARRUSEL_DI_CONSTANTS, CURRASEL_CONSTANTS } from './carrusel-constants';

@NgModule({
  declarations: [
    CarruselComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    SharedModule,
  ],
  exports: [
    CarruselComponent
  ],
  providers: [
    {
      provide: CURRASEL_CONSTANTS,
      useValue: CARRUSEL_DI_CONSTANTS
    }
  ]
})
export class CarruselModule {}
