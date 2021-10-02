import { createReducer } from '@ngrx/store';
import { produceOn } from 'store-tools';
import * as BoatShapesActions from './boats-shapes.actions';
import { MappedBoatShapesModel } from 'models';
import { assocPath } from 'ramda';

export interface IBoatShapeState {
  shapes: MappedBoatShapesModel;
}

export const boatShapesInitialState: IBoatShapeState = {
  shapes: {} as never,
};

export const boatShapesReducer = createReducer(
  boatShapesInitialState,
  produceOn(BoatShapesActions.addBoatShapes, (state, { shapes }) => {
    state.shapes = shapes.reduce((acc, shape) => assocPath([shape.shapeType], shape, acc), {} as MappedBoatShapesModel);
  })
);
