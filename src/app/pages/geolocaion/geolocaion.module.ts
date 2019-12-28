import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocaionPageRoutingModule } from './geolocaion-routing.module';

import { GeolocaionPage } from './geolocaion.page';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocaionPageRoutingModule,
    SharedModule,
  ],
  declarations: [GeolocaionPage]
})
export class GeolocaionPageModule {}
