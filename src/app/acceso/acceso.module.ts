import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


import { AccesoRoutingModule } from './acceso-routing.module';
import { AccesoComponent } from './acceso.component';
import { DesbloquearUsuarioModule } from './desbloquear-usuario/desbloquear-usuario.module';
import { FooterModule } from './footer/footer.module';
import { LoginModule } from './login/login.module';
import { RecuperarContrasenyaModule } from './recuperar-contrasenya/recuperar-contrasenya.module';
import { ActualizarContrasenyaModule } from './actualizar-contrasenya/actualizar-contrasenya.module';
import { ValidarUsuarioModule } from './validar-usuario/validar-usuario.module';
import { OnboardingComponent } from './onboarding/onboarding.component';
import {CarouselModule, CollapseModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AccesoRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    LoginModule,
    RecuperarContrasenyaModule,
    DesbloquearUsuarioModule,
    ActualizarContrasenyaModule,
    ActualizarContrasenyaModule,
    ValidarUsuarioModule,
    FooterModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot()
  ],
  declarations: [AccesoComponent, OnboardingComponent],

})
export class AccesoModule {
}
