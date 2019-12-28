import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeolocaionPage } from './geolocaion.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocaionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeolocaionPageRoutingModule {}
