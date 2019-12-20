import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengeProjectPage } from './challenge-project.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengeProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeProjectPageRoutingModule {}
