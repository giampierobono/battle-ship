import { BoatModel } from 'models';
import { createReducer } from '@ngrx/store';
import { produceOn } from 'store-tools';
import * as BoatsActions from './boats.actions';

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
  })
  /*produceOn(BoatsActions.hitPlayerBoat, (state, { position }) => {
    state.boats.forEach((boat) => {
      if (
        boat.positions[position.row][position.column] !== undefined &&
        !boat.positions[position.row][position.column]
      ) {
        boat.positions[position.row][position.column] = true;
        boat.hits++;
      }
    });
  })*/
);
