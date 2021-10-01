import { createAction, props } from '@ngrx/store';
import { PlayerFiresPositionPayloadModel } from '../../players';

export const tryFirePosition = createAction('[Game] Player fire!', props<PlayerFiresPositionPayloadModel>());
