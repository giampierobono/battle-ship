import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './game-settings';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature('battleShipCore', reducers), EffectsModule.forFeature([GameEffects])],
  exports: [],
})
export class BattleShipStoreModule {}
