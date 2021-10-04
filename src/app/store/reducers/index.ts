import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { resetGame } from '../actions/reset-game.actions';

const localStorageSyncReducer = (reducer: ActionReducer<AppState>): ActionReducer<AppState> =>
  localStorageSync({
    keys: [
      {
        battleShipCore: {
          encrypt: (state) => btoa(state),
          decrypt: (state) => atob(state),
        },
      },
    ],
    rehydrate: true,
  })(reducer);

const resetGameReducer = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {
  return (state, action) => {
    if (action != null && action.type === resetGame.type) {
      localStorage.removeItem('battleShipCore');
      return reducer(undefined, { type: INIT });
    }
    return reducer(state, action);
  };
};

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {};

export const metaReducers: MetaReducer<AppState>[] = [resetGameReducer, localStorageSyncReducer];
