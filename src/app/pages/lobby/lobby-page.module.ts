import { NgModule } from '@angular/core';
import { ButtonModule } from '../../components/button/button.module';
import { CommonModule } from '@angular/common';
import { LobbyPageComponent } from './lobby-page.component';
import { LobbyPageRoutingModule } from './lobby-page-routing.module';

@NgModule({
  declarations: [LobbyPageComponent],
  imports: [CommonModule, ButtonModule, LobbyPageRoutingModule],
  exports: [LobbyPageComponent],
})
export class LobbyPageModule {}
