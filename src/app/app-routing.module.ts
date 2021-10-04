import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'lobby',
    loadChildren: () => import('./pages/lobby/lobby-page.module').then((m) => m.LobbyPageModule),
  },
  {
    path: 'game',
    loadChildren: () => import('./pages/game/game-page.module').then((m) => m.GamePageModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'lobby',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
