import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunShowMissChallengePage } from './run-show-miss-challenge.page';

const routes: Routes = [
  {
    path: '',
    component: RunShowMissChallengePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunShowMissChallengePageRoutingModule {}
