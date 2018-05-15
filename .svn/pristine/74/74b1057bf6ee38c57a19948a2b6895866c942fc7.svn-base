import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import {InformesRoutingModule} from './informes-routing.module';
import {InformesComponent} from './informes.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';
import {AgGridModule} from 'ag-grid-angular';
import { NoticiasComponent } from './noticias/noticias.component';
import { BlogComponent } from './blog/blog.component';
import { UltimosEventosComponent } from './ultimos-eventos/ultimos-eventos.component';
import { EventosComponent } from './eventos/eventos.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    CollapseModule.forRoot(),
    InformesRoutingModule,
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    FormsModule,
    AgGridModule.withComponents([ ])
  ],
  declarations: [
    InformesComponent,
    NoticiasComponent,
    BlogComponent,
    UltimosEventosComponent,
    EventosComponent,
  ]
})
export class InformesModule {
}
