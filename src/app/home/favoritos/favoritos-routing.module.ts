import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FavoritosComponent} from './favoritos.component';

const FavoritosComponentRoutes: Routes = [
  { path: '', component: FavoritosComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(FavoritosComponentRoutes)
  ],
  exports: [RouterModule],
  providers: [ ]
})
export class FavoritosRoutingModule {}
