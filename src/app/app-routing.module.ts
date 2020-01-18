import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'mission', pathMatch: 'full' },
  {
    path: 'mission',
    loadChildren: () => import('./pages/mission/mission.module').then( m => m.MissionPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'run',
    loadChildren: () => import('./pages/run/run.module').then( m => m.RunPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./pages/inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'challenge',
    loadChildren: () => import('./pages/challenge/challenge.module').then( m => m.ChallengePageModule)
  },
  {
    path: 'create-challenge',
    loadChildren: () => import('./pages/create-challenge/create-challenge.module').then( m => m.CreateChallengePageModule)
  },
  {
    path: 'challenge-project',
    loadChildren: () => import('./pages/challenge-project/challenge-project.module').then( m => m.ChallengeProjectPageModule)
  },
  {
    path: 'geolocaion',
    loadChildren: () => import('./pages/geolocaion/geolocaion.module').then( m => m.GeolocaionPageModule)
  },




  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
