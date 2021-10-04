import { createSelector } from '@ngrx/store';
import { getCoreStateFeatureSelector } from '../common/common.selectors';

export const getBoatShapes = createSelector(getCoreStateFeatureSelector, ({ boatShapes: { shapes } }) => shapes);
