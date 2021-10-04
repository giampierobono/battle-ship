import { ActionReducerMap } from '@ngrx/store';
import { CoreState } from './common';
import { playersReducer } from './players';
import { boatsReducer } from './boats';
import { boatShapesReducer } from './boats-shapes';
import { gameSettingsReducer } from './game-settings';
import { battleShipGameReducer } from './battleship-game';

export const reducers: ActionReducerMap<CoreState> = {
  players: playersReducer,
  boats: boatsReducer,
  boatShapes: boatShapesReducer,
  settings: gameSettingsReducer,
  game: battleShipGameReducer,
};
