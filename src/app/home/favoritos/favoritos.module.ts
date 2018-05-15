import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import {CollapseModule} from 'ngx-bootstrap';
import {FavoritosRoutingModule} from './favoritos-routing.module';
import {FavoritosComponent} from './favoritos.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    CollapseModule.forRoot(),
    FavoritosRoutingModule

  ],
  declarations: [
    FavoritosComponent
  ]
})
export class FavoritosModule {
}
