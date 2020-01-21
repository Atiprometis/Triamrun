import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengePageRoutingModule } from './challenge-routing.module';

import { ChallengePage } from './challenge.page';
// import { TabsMenuComponent } from '../../components/tabs-menu/tabs-menu.component';
// import { MyChallengeComponent } from '../../components/my-challenge/my-challenge.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengePageRoutingModule
  ],
  declarations: [ChallengePage]
})
export class ChallengePageModule {}
