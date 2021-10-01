import { createReducer } from '@ngrx/store';
import * as PlayersActions from '../actions/players.actions';
import { MappedPlayersModel } from 'models';
import { produceOn } from 'store-tools';

export interface IPlayersState {
  players: MappedPlayersModel;
}

export const playersInitialState: IPlayersState = {
  players: {},
};

export const playersReducer = createReducer(
  playersInitialState,
  produceOn(PlayersActions.createPlayer, (state, { newPlayer }) => {
    state.players[newPlayer.playerIndex] = newPlayer;
  }),
  produceOn(PlayersActions.addBoatToPlayer, (state, { boat, playerIndex }) => {
    state.players[playerIndex].boats[boat.boatIndex] = boat;
  }),
  produceOn(PlayersActions.hitPlayerBoat, (state, { hitBoatIndex, hitPlayerIndex, position }) => {
    const boat = state.players[hitPlayerIndex].boats[hitBoatIndex];
    boat.positions[position.row][position.column] = true;
    boat.hits++;
    boat.isSunk = boat.hits === boat.shape.shapeSize;
  })
);
