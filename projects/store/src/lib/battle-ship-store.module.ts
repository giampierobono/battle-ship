import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature('battleShip', [])],
  exports: [],
})
export class BattleShipStoreModule {}
