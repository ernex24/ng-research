import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService,
              private dataStorageService: DataStorageService) {
      /*Añadimos el array de idiomas*/
      translate.addLangs(['en', 'es']);
    /*Configuramos por defecto el idioma*/
      translate.setDefaultLang('en');

      // Obtenemos el idioma que se utiliza en el navegador
      const browserLang = translate.getBrowserLang();
      // Setteamos el idioma a utilizar en la aplicacion
      translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
  }

  ngOnInit() {
     // Recupero el servidor de servicios rest
     // this.dataStorageService.getRestServers();
  }
}