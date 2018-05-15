import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';
import { CarruselModule } from '../carrusel/carrusel.module';
import { LoginService } from './login.service';
import { LOGIN_CONSTANTS, LOGIN_DI_CONSTANTS } from './login-constants';
import {ResponsiveModule} from 'ng2-responsive';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    LoginRoutingModule,
    SharedModule,
    ResponsiveModule,
    CarruselModule
  ],
   providers: [
    LoginService,
     {
       provide: LOGIN_CONSTANTS,
       useValue: LOGIN_DI_CONSTANTS
     }
  ]
})
export class LoginModule {}
