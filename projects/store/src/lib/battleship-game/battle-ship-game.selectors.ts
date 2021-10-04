import { createSelector } from '@ngrx/store';
import { getCoreStateFeatureSelector } from '../common/common.selectors';
import { BoardPositionsModel, BoatModel } from 'models';
import { getAllBoats } from '../boats';
import { getPlayers } from '../players';

export const getBattleShipGameState = createSelector(getCoreStateFeatureSelector, ({ game }) => game);

export const getPlayerTurn = createSelector(getBattleShipGameState, ({ playerTurn }) => playerTurn);

export const getPlayersSunkBoats = createSelector(getBattleShipGameState, ({ playersSunkBoats }) => playersSunkBoats);

export const getCurrentPlayerSunkBoats = createSelector(
  getPlayerTurn,
  getPlayersSunkBoats,
  getAllBoats,
  getPlayers,
  (currentPlayerIndex, playersSunkBoats, allBoats, players) =>
    (playersSunkBoats[currentPlayerIndex] || []).map((sunkBoat) => {
      return {
        player: players[sunkBoat.boatBelongsToPlayerIndex],
        boat: allBoats[sunkBoat.sunkByPlayerIndex][sunkBoat.boatIndex],
      };
    })
);

export const getIsCurrentTurnOver = createSelector(
  getBattleShipGameState,
  ({ isCurrentTurnOver }) => isCurrentTurnOver
);

export const getPlayerMoves = createSelector(
  getBattleShipGameState,
  getPlayerTurn,
  ({ playersMoves }, currentPlayerIndex) => playersMoves[currentPlayerIndex] || []
);

export const getBoatForCurrentPlayer = createSelector(
  getPlayerTurn,
  getAllBoats,
  (currentPlayer, boats): BoatModel[] => boats[currentPlayer]
);

//TODO: check row - column types
export const getAllBoatsPositionsForCurrentPlayer = createSelector(
  getBoatForCurrentPlayer,
  (playerBoats: BoatModel[]) =>
    playerBoats.reduce((acc, currentBoat) => {
      Object.keys(currentBoat.positions).forEach(
        (key) => (acc = { ...acc, [key]: { ...acc[key as any], ...currentBoat.positions[key as any] } })
      );
      return acc;
    }, {} as BoardPositionsModel)
);
