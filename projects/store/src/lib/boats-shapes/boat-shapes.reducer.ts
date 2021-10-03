import { createReducer } from '@ngrx/store';
import { produceOn } from 'store-tools';
import * as GameSettingsActions from '../game-settings/game-settings.actions';
import { MappedBoatShapesModel } from 'models';
import { assocPath } from 'ramda';

export interface IBoatShapeState {
  shapes: MappedBoatShapesModel;
}

export const boatShapesInitialState: IBoatShapeState = {
  shapes: {} as any,
};

export const boatShapesReducer = createReducer(
  boatShapesInitialState,
  produceOn(GameSettingsActions.setGameSettings, (state, { shapes }) => {
    state.shapes = shapes.reduce((acc, shape) => assocPath([shape.shapeType], shape, acc), {} as MappedBoatShapesModel);
  })
);
