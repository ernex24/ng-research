import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const loginComponentRoutes: Routes = [
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(loginComponentRoutes)
  ],
  exports: [RouterModule],
  providers: [ ]
})
export class LoginRoutingModule {}
