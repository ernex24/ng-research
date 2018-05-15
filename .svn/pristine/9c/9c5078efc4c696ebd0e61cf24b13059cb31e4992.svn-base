import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import {LicenseManager} from "ag-grid-enterprise/main";
// LicenseManager.setLicenseKey("GVC_Gaesco_Beka,_Sociedad_de_Valores_S.A_Site_1Devs1_March_2018__MTUxOTg2MjQwMDAwMA==d7c4a62dad034754ca385e307fafdb56");

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
