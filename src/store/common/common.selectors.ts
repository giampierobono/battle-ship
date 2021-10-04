import { createFeatureSelector } from '@ngrx/store';
import { CoreState } from './models';

export const getCoreStateFeatureSelector = createFeatureSelector<CoreState>('battleShipCore');
