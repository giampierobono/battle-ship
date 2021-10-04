import { createSelector } from '@ngrx/store';
import { getCoreStateFeatureSelector } from '../common/common.selectors';

export const getGameSettings = createSelector(getCoreStateFeatureSelector, ({ settings }) => settings);

export const getMaxBoatsPerPlayer = createSelector(getGameSettings, ({ boatsPerPlayer }) => boatsPerPlayer);

export const getBoardSize = createSelector(getGameSettings, ({ boardSize }) => boardSize);
