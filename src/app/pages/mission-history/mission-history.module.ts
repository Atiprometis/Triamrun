import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionHistoryPageRoutingModule } from './mission-history-routing.module';

import { MissionHistoryPage } from './mission-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionHistoryPageRoutingModule
  ],
  declarations: [MissionHistoryPage]
})
export class MissionHistoryPageModule {}
