import { createReducer } from '@ngrx/store';
import { produceOn } from 'store-tools';
import * as GameSettingsActions from './game-settings.actions';

export interface IGameSettingsState {
  numOfPlayers: number;
  boatsPerPlayer: number;
  boardSize: number;
}

export const gameSettingsInitialState: IGameSettingsState = {
  boardSize: -1,
  boatsPerPlayer: -1,
  numOfPlayers: -1,
};

export const gameSettingsReducer = createReducer(
  gameSettingsInitialState,
  produceOn(GameSettingsActions.setGameSettings, (state, { boatsPerPlayer, numOfPlayers, boardSize }) => {
    state.boardSize = boardSize;
    state.numOfPlayers = numOfPlayers;
    state.boatsPerPlayer = boatsPerPlayer;
  })
);
