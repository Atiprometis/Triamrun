import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateChallengePage } from './create-challenge.page';

const routes: Routes = [
  {
    path: '',
    component: CreateChallengePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateChallengePageRoutingModule {}
