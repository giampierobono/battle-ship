import { createSelector } from '@ngrx/store';
import { getCoreStateFeatureSelector } from '../common/common.selectors';

export const getBattleShipGameState = createSelector(getCoreStateFeatureSelector, ({ game }) => game);

export const getPlayerTurn = createSelector(getBattleShipGameState, ({ playerTurn }) => playerTurn);
