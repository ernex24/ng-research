import { ICarruselConstants } from './carrusel-constants.interface';
import { InjectionToken } from '@angular/core';


export const CARRUSEL_DI_CONSTANTS: ICarruselConstants = {
      TITULO:  'GVC Gaesco Beka Research Division',
      IMAGEN1: 'assets/img/imagenes_carrusel/pic1.png',
      IMAGEN2: 'assets/img/imagenes_carrusel/pic2.png',
      IMAGEN3: 'assets/img/imagenes_carrusel/pic3.png',
};

export let CURRASEL_CONSTANTS = new InjectionToken< ICarruselConstants >( 'carrusel.constants' );
