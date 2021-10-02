import { createAction, props } from '@ngrx/store';
import { GameSettingsPayloadModel } from './models';

export const setGameSettings = createAction(
  '[Game settings] Set settings for current game',
  props<GameSettingsPayloadModel>()
);
