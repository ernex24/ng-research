import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      { path: 'informes', loadChildren: './informes/informes.module#InformesModule'},
      { path: 'recomendaciones', loadChildren: './recomendaciones/recomendaciones.module#RecomendacionesModule' },
      { path: 'dividendos', loadChildren: './dividendos/dividendos.module#DividendosModule' },
      { path: 'favoritos', loadChildren: './favoritos/favoritos.module#FavoritosModule' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
