import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'run', pathMatch: 'full' },
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
    path: 'more',
    loadChildren: () => import('./pages/more/more.module').then( m => m.MorePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
