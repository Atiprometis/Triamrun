import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunShowMissChallengePageRoutingModule } from './run-show-miss-challenge-routing.module';

import { RunShowMissChallengePage } from './run-show-miss-challenge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RunShowMissChallengePageRoutingModule
  ],
  declarations: [RunShowMissChallengePage]
})
export class RunShowMissChallengePageModule {}
