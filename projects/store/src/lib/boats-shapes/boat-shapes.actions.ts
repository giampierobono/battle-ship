import { createAction, props } from '@ngrx/store';
import { AddBoatShapesPayloadModel } from './models';

export const addBoatShapes = createAction('[Boats] Add boat shape', props<AddBoatShapesPayloadModel>());
