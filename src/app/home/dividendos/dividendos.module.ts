import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import {DividendosRoutingModule} from './dividendos-routing.module';
import {DividendosComponent} from './dividendos.component';
import {AgGridModule} from 'ag-grid-angular';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    CollapseModule.forRoot(),
    DividendosRoutingModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([ ])

  ],
  declarations: [
    DividendosComponent
  ]
})
export class DividendosModule {
}