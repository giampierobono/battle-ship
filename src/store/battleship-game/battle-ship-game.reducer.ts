import { createReducer } from '@ngrx/store';
import * as BattleShipGameActions from './battle-ship-game.actions';
import { produceOn } from '../common/utils';
import { MappedPlayersMovesModel, MappedPlayersSunkBoatsModel } from '../../models';

export interface IBattleShipGameState {
  playerTurn: number;
  isCurrentTurnOver: boolean;
  isGameOver: boolean;
  winnerPlayer?: number;
  playersMoves: MappedPlayersMovesModel;
  playersSunkBoats: MappedPlayersSunkBoatsModel;
}

export const battleShipGameInitialState: IBattleShipGameState = {
  playerTurn: 0,
  isCurrentTurnOver: false,
  isGameOver: false,
  playersMoves: {},
  playersSunkBoats: {},
  winnerPlayer: undefined,
};

export const battleShipGameReducer = createReducer(
  battleShipGameInitialState,
  produceOn(BattleShipGameActions.setPlayerTurn, (state, { playerIndex }) => {
    state.playerTurn = playerIndex;
  }),
  produceOn(BattleShipGameActions.savePlayerMove, (state, { state: positionState, shotPosition }) => {
    if (!state.playersMoves[shotPosition.playerIndex]) {
      state.playersMoves[shotPosition.playerIndex] = {};
      state.playersMoves[shotPosition.playerIndex][shotPosition.row] = {};
    } else if (!state.playersMoves[shotPosition.playerIndex][shotPosition.row]) {
      state.playersMoves[shotPosition.playerIndex][shotPosition.row] = {};
    }
    state.playersMoves[shotPosition.playerIndex][shotPosition.row][shotPosition.column] = positionState;
    state.isCurrentTurnOver = true;
  }),
  produceOn(BattleShipGameActions.setPlayerTurn, (state, { playerIndex }) => {
    state.playerTurn = playerIndex;
    state.isCurrentTurnOver = false;
  }),
  produceOn(BattleShipGameActions.addSunkBoat, (state, { boatIndex, boatBelongsToPlayerIndex, sunkByPlayerIndex }) => {
    if (!state.playersSunkBoats[sunkByPlayerIndex]) {
      state.playersSunkBoats[sunkByPlayerIndex] = [];
    }
    // TODO: create more specific model for the store value (no need to save sunkByPlayerIndex)
    state.playersSunkBoats[sunkByPlayerIndex].push({ boatIndex, boatBelongsToPlayerIndex, sunkByPlayerIndex });
  }),
  produceOn(BattleShipGameActions.setWinnerPlayer, (state, { winnerPlayerIndex }) => {
    state.winnerPlayer = winnerPlayerIndex;
    state.isGameOver = true;
  })
);
