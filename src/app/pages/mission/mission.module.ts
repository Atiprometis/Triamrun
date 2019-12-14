import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionPageRoutingModule } from './mission-routing.module';

import { MissionPage } from './mission.page';
import { MissionButtonComponent } from '../../components/mission-button/mission-button.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionPageRoutingModule
  ],
  declarations: [MissionPage,MissionButtonComponent]
})
export class MissionPageModule {}
