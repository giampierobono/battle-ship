import { ActionReducerMap } from '@ngrx/store';
import { CoreState } from './common/models';
import { playersReducer } from './players/reducer';

export const reducers: ActionReducerMap<CoreState> = {
  players: playersReducer,
};
