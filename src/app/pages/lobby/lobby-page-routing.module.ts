import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LobbyPageComponent } from './lobby-page.component';
import { LobbyPageGuardian } from './lobby-page.guardian';

const routes: Routes = [
  {
    path: '',
    component: LobbyPageComponent,
    canActivate: [LobbyPageGuardian],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [LobbyPageGuardian],
  exports: [RouterModule],
})
export class LobbyPageRoutingModule {}
