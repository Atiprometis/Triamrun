import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengeProjectPageRoutingModule } from './challenge-project-routing.module';

import { ChallengeProjectPage } from './challenge-project.page';
import { TabsMenuComponent } from '../../components/tabs-menu/tabs-menu.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengeProjectPageRoutingModule
  ],
  declarations: [ChallengeProjectPage,TabsMenuComponent]
})
export class ChallengeProjectPageModule {}
