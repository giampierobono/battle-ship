import { createSelector } from '@ngrx/store';
import { getCoreStateFeatureSelector } from '../common/common.selectors';
import { getPlayerTurn } from '../battleship-game';
import { BoatModel, BoatPositionModel } from 'models';

export const getBoatsState = createSelector(getCoreStateFeatureSelector, ({ boats }) => boats);

export const getAllBoats = createSelector(getBoatsState, ({ boats }) => boats);

/*
const getBoatsForPlayerInternal = (playerIndex: number) =>
  createSelector(getBoatsState, (boats) => boats.filter((boat) => boat.playerIndex === playerIndex));

export const getBoatsForPlayer = (playerIndex: number) =>
  defaultMemoize(getBoatsForPlayerInternal).memoized(playerIndex);

const getBoatsPositionsForPlayerInternal = (playerIndex: number) =>
  createSelector(getBoatsForPlayer(playerIndex), (playerBoats: BoatModel[]) =>
    playerBoats.reduce((acc, currentBoat) => {
      Object.keys(currentBoat.positions).forEach(
        (key: string) => (acc = { ...acc, [key]: { ...acc[key], ...currentBoat.positions[key] } })
      );
      return acc;
    }, {} as BoatPositionModel)
  );

export const getBoatsPositionsForPlayer = (playerIndex: number) =>
  defaultMemoize(getBoatsPositionsForPlayerInternal).memoized(playerIndex);
*/

export const getBoatForCurrentPlayer = createSelector(
  getPlayerTurn,
  getAllBoats,
  (currentPlayer, boats): BoatModel[] => boats[currentPlayer]
);

export const getAllBoatsPositionsForCurrentPlayer = createSelector(
  getBoatForCurrentPlayer,
  (playerBoats: BoatModel[]) =>
    playerBoats.reduce((acc, currentBoat) => {
      Object.keys(currentBoat.positions).forEach(
        (key: string) => (acc = { ...acc, [key]: { ...acc[key], ...currentBoat.positions[key] } })
      );
      return acc;
    }, {} as BoatPositionModel)
);
