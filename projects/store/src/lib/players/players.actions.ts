import { createAction, props } from '@ngrx/store';
import { CreatePlayerPayloadModel } from './models';

export const createPlayer = createAction('[Players] Add new player', props<CreatePlayerPayloadModel>());
