import { createReducer } from '@ngrx/store';
import * as PlayersActions from './players.actions';
import { PlayerModel } from 'models';
import { produceOn } from 'store-tools';

export interface IPlayersState {
  players: PlayerModel[];
}

export const playersInitialState: IPlayersState = {
  players: [],
};

export const playersReducer = createReducer(
  playersInitialState,
  produceOn(PlayersActions.addPlayers, (state, { players }) => {
    state.players = { ...players };
  })
);
