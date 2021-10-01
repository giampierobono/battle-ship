import { ActionReducerMap } from '@ngrx/store';
import { CoreState } from './common';
import { playersReducer } from './players';
import { boatsReducer } from './boats';
import { boatShapesReducer } from './boats-shapes';

export const reducers: ActionReducerMap<CoreState> = {
  players: playersReducer,
  boats: boatsReducer,
  boatShapes: boatShapesReducer,
};
