import { createAction, props } from '@ngrx/store';
import { PlayerFiresPositionPayloadModel } from '../../common/models';

export const tryFirePosition = createAction('[Game] Player fire!', props<PlayerFiresPositionPayloadModel>());
