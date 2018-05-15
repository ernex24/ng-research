import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecomendacionesComponent} from './recomendaciones.component';

const RecomendacionesComponentRoutes: Routes = [
  { path: '', component: RecomendacionesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(RecomendacionesComponentRoutes)
  ],
  exports: [RouterModule],
  providers: [ ]
})
export class RecomendacionesRoutingModule {}
