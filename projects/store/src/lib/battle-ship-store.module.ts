import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature('battleShipCore', reducers)],
  exports: [],
})
export class BattleShipStoreModule {}
