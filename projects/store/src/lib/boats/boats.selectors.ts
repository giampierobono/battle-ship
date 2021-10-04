import { createSelector } from '@ngrx/store';
import { getCoreStateFeatureSelector } from '../common/common.selectors';

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
    }, {} as BoardPositionsModel)
  );

export const getBoatsPositionsForPlayer = (playerIndex: number) =>
  defaultMemoize(getBoatsPositionsForPlayerInternal).memoized(playerIndex);
*/
