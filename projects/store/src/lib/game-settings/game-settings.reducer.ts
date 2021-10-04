import { createReducer } from '@ngrx/store';
import { produceOn } from 'store-tools';
import * as GameSettingsActions from './game-settings.actions';

export interface IGameSettingsState {
  numOfPlayers: number;
  boatsPerPlayer: number;
  boardSize: number;
}

export const gameSettingsInitialState: IGameSettingsState = {
  boardSize: 0,
  boatsPerPlayer: 0,
  numOfPlayers: 0,
};

export const gameSettingsReducer = createReducer(
  gameSettingsInitialState,
  produceOn(GameSettingsActions.setGameSettings, (state, { boatsPerPlayer, numOfPlayers, boardSize }) => {
    state.boardSize = boardSize;
    state.numOfPlayers = numOfPlayers;
    state.boatsPerPlayer = boatsPerPlayer;
  })
);
