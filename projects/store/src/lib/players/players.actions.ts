import { createAction, props } from '@ngrx/store';
import { AddPlayersPayloadModel } from './models';

export const addPlayers = createAction('[Players] Add new players', props<AddPlayersPayloadModel>());
