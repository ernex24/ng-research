import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

/**
 * Objecto que carga las traducciones mediante json.
 */
export function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule,
    CoreModule
  ],
  providers: [


  ],
  bootstrap: [AppComponent, SpinnerComponent]
})
export class AppModule { }
