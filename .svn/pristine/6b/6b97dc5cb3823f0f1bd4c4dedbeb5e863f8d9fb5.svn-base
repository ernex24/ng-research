import { CURRASEL_CONSTANTS } from './carrusel-constants';
import { ICarruselConstants } from './carrusel-constants.interface';
import { Carrusel } from './carrusel.model';
import { Component, OnInit, ViewEncapsulation, Inject} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarruselComponent implements OnInit {

   carrusel: Carrusel[] = [];

  constructor(private translate: TranslateService,
    @Inject(CURRASEL_CONSTANTS) private constantsCarrusel: ICarruselConstants) { }

  ngOnInit() {

      this.carrusel[0] =   new Carrusel(
        this.constantsCarrusel.TITULO,
        this.translate.get('Carrusel.Texto'),
        this.constantsCarrusel.IMAGEN1
      );
      this.carrusel[1] =   new Carrusel(
        this.constantsCarrusel.TITULO,
        this.translate.get('Carrusel.Texto'),
        this.constantsCarrusel.IMAGEN2
      );
      this.carrusel[2] =   new Carrusel(
        this.constantsCarrusel.TITULO,
        this.translate.get('Carrusel.Texto'),
        this.constantsCarrusel.IMAGEN3
      );
  }

}
