import { NgModule } from '@angular/core';
import { GamePageComponent } from './game-page.component';
import { StoreModule } from '@ngrx/store';
import { BoardComponent } from '../../components/board/board.component';
import { BoardContainerComponent } from '../../components/boards-container/board-container.component';
import { GamePageRoutingModule } from './game-page-routing.module';
import { ButtonModule } from '../../components/button/button.module';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { GamePageEffects } from './store/game-page.effects';
import { BattleShipStoreModule } from '../../../store/battle-ship-store.module';

@NgModule({
  declarations: [GamePageComponent, BoardComponent, BoardContainerComponent],
  imports: [
    CommonModule,
    StoreModule,
    BattleShipStoreModule,
    GamePageRoutingModule,
    ButtonModule,
    EffectsModule.forFeature([GamePageEffects]),
  ],
  exports: [GamePageComponent],
})
export class GamePageModule {}
