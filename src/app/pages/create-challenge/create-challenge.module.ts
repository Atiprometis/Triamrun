import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateChallengePageRoutingModule } from './create-challenge-routing.module';

import { CreateChallengePage } from './create-challenge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateChallengePageRoutingModule
  ],
  declarations: [CreateChallengePage]
})
export class CreateChallengePageModule {}
