import { createReducer } from '@ngrx/store';
import { produceOn } from 'store-tools';
import * as BattleShipGameActions from './battle-ship-game.actions';

export interface IBattleShipGameState {
  playerTurn: number;
}

export const battleShipGameInitialState: IBattleShipGameState = {
  playerTurn: 0,
};

export const battleShipGameReducer = createReducer(
  battleShipGameInitialState,
  produceOn(BattleShipGameActions.setPlayerTurn, (state, { playerIndex }) => {
    state.playerTurn = playerIndex;
  })
);
