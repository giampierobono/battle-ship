import { createAction, props } from '@ngrx/store';
import { AddBoatShapePayloadModel } from './models';

export const addBoatShape = createAction('[Boats] Add boat shape', props<AddBoatShapePayloadModel>());
