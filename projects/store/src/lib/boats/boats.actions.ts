import { createAction, props } from '@ngrx/store';
import { AddBoatToPlayerPayload, HitPlayerBoatPayloadModel } from './models';

export const addBoatToPlayer = createAction('[Boats] Add boat to player', props<AddBoatToPlayerPayload>());

export const hitPlayerBoat = createAction('[Boats] Hit player boat', props<HitPlayerBoatPayloadModel>());
