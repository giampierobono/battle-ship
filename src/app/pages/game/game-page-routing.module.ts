import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './game-page.component';
import { CommonModule } from '@angular/common';
import { GamePageGuardian } from './game-page.guardian';

const routes: Routes = [
  {
    path: '',
    component: GamePageComponent,
    canActivate: [GamePageGuardian],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [GamePageGuardian],
  exports: [RouterModule],
})
export class GamePageRoutingModule {}
