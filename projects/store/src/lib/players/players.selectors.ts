import { createSelector } from '@ngrx/store';
import { getCoreStateFeatureSelector } from '../common/common.selectors';

export const getPlayerState = createSelector(getCoreStateFeatureSelector, ({ players }) => players);

export const getPlayers = createSelector(getPlayerState, ({ players }) => players);

export const getNumberOrPlayers = createSelector(getPlayers, (players) => players.length);
