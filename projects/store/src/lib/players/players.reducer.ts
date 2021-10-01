import { createReducer } from '@ngrx/store';
import * as PlayersActions from './players.actions';
import { MappedPlayersModel } from 'models';
import { produceOn } from 'store-tools';

export interface IPlayersState {
  players: MappedPlayersModel;
}

export const playersInitialState: IPlayersState = {
  players: {},
};

export const playersReducer = createReducer(
  playersInitialState,
  produceOn(PlayersActions.createPlayer, (state, { newPlayer }) => {
    state.players[newPlayer.playerIndex] = newPlayer;
  })
);
