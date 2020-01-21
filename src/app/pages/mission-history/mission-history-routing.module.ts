import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionHistoryPage } from './mission-history.page';

const routes: Routes = [
  {
    path: '',
    component: MissionHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionHistoryPageRoutingModule {}
