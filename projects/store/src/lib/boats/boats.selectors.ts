import { createSelector } from '@ngrx/store';
import { getCoreStateFeatureSelector } from '../common/common.selectors';

export const getBoatsState = createSelector(getCoreStateFeatureSelector, ({ boats }) => boats);

export const getAllBoats = createSelector(getBoatsState, ({ boats }) => boats);

export const getTotalNumberOfBoats = createSelector(getAllBoats, (boats) => boats.length);
