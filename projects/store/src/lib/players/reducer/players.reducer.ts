import { createReducer, on } from '@ngrx/store';
import * as PlayersActions from '../actions/players.actions';
import { BoatPositionModel, MappedPlayersModel } from 'models';

export interface IPlayersState {
  players: MappedPlayersModel;
}
export const playersInitialState: IPlayersState = {
  players: {},
};

export const playersReducer = createReducer(
  playersInitialState,
  on(PlayersActions.createPlayer, (state, { newPlayer }) => ({
    ...state,
    players: { ...state.players, [newPlayer.playerIndex]: { ...newPlayer } },
  })),
  on(PlayersActions.addBoatToPlayer, (state, { boat, playerIndex }) => ({
    ...state,
    players: {
      ...state.players,
      [playerIndex]: {
        ...state.players[playerIndex],
        boats: {
          ...state.players[playerIndex].boats,
          [boat.boatIndex]: {
            ...boat,
          },
        },
      },
    },
  })),
  on(PlayersActions.hitPlayerBoat, (state, { hitBoatIndex, hitPlayerIndex, position }) => ({
    ...state,
    players: {
      ...state.players,
      [hitPlayerIndex]: {
        ...state.players[hitPlayerIndex],
        boats: {
          ...state.players[hitPlayerIndex].boats,
          [hitBoatIndex]: {
            ...state.players[hitPlayerIndex].boats[hitBoatIndex],
            positions: state.players[hitPlayerIndex].boats[hitBoatIndex].positions.map(
              (boatPosition: BoatPositionModel) => {
                const clonedBoatPosition = { ...boatPosition };
                if (clonedBoatPosition[position.row] && clonedBoatPosition[position.row][position.column]) {
                  clonedBoatPosition[position.row][position.column] = true;
                }
              }
            ),
          },
        },
      },
    },
  }))
);
