import { createReducer } from '@ngrx/store';
import * as GameSettingsActions from '../game-settings/game-settings.actions';
import { assocPath } from 'ramda';
import { MappedBoatShapesModel } from '../../models';
import { produceOn } from '../common/utils';

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
