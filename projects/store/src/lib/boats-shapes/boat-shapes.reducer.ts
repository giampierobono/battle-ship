import { createReducer } from '@ngrx/store';
import { produceOn } from 'store-tools';
import * as BoatShapesActions from './boats-shapes.actions';
import { MappedBoatShapesModel } from 'models';

export interface IBoatShapeState {
  shapes: MappedBoatShapesModel;
}

export const boatShapesInitialState: IBoatShapeState = {
  shapes: {} as never,
};

export const boatShapesReducer = createReducer(
  boatShapesInitialState,
  produceOn(BoatShapesActions.addBoatShape, (state, { shape }) => {
    state.shapes[shape.shapeType] = shape;
  })
);
