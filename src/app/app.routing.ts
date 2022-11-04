import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ColorsRouting} from "./colors/colors.routing"

const routes:Routes = [
  ...ColorsRouting,
  {
    path: '**',
    redirectTo: 'colors/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule {
}
