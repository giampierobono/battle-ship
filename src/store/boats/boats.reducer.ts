import { createReducer } from '@ngrx/store';
import * as BoatsActions from './boats.actions';
import { BoatModel, PositionStateEnum } from '../../models';
import { produceOn } from '../common/utils';

export interface IBoatsState {
  boats: Array<Array<BoatModel>>;
}

export const boatsInitialState: IBoatsState = {
  boats: [],
};

export const boatsReducer = createReducer(
  boatsInitialState,
  produceOn(BoatsActions.addBoatsToPlayer, (state, { boats }) => {
    state.boats = boats;
  }),
  produceOn(BoatsActions.hitPlayerBoat, (state, { position: { playerIndex, row, column }, boatIndex }) => {
    state.boats[playerIndex][boatIndex].positions[row][column] = PositionStateEnum.HIT;
    state.boats[playerIndex][boatIndex].hits++;
  })
);
