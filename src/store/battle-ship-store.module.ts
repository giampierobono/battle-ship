import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './game-settings';
import { BattleShipGameEffects } from './battleship-game';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('battleShipCore', reducers),
    EffectsModule.forFeature([GameEffects, BattleShipGameEffects]),
  ],
  exports: [],
})
export class BattleShipStoreModule {}
