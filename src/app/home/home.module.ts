import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CollapseModule } from 'ngx-bootstrap';
import { InformesModule} from './informes/informes.module';
import {HomeRoutingModule} from './home-routing.module';
import {RecomendacionesModule} from './recomendaciones/recomendaciones.module';
import {DividendosModule} from './dividendos/dividendos.module';
import {FavoritosModule} from './favoritos/favoritos.module';

import { ModalModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import {TogglebarService} from '../shared/togglebar.service';
import { CambiarEmailComponent } from './navbar/cambiar-email/cambiar-email.component';
import { LogOutComponent } from './navbar/log-out/log-out.component';
import { CambiarContrasenyaComponent } from './navbar/cambiar-contrasenya/cambiar-contrasenya.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    SharedModule,
    CollapseModule.forRoot(),
    InformesModule,
    HomeRoutingModule,
    RecomendacionesModule,
    DividendosModule,
    FavoritosModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    CambiarEmailComponent,
    LogOutComponent,
    CambiarContrasenyaComponent,
  ],
  entryComponents: [ LogOutComponent, CambiarEmailComponent, CambiarContrasenyaComponent ],
  providers: [ TogglebarService ],
})
export class HomeModule {
}
