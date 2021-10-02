import { createAction, props } from '@ngrx/store';
import { AddBoatToPlayerPayload, AddBoatsToPlayerPayload, HitPlayerBoatPayloadModel } from './models';

export const addBoatToPlayer = createAction('[Boats] Add boat to player', props<AddBoatToPlayerPayload>());

export const addBoatsToPlayer = createAction('[Boats] Add boat to player', props<AddBoatsToPlayerPayload>());

export const hitPlayerBoat = createAction('[Boats] Hit player boat', props<HitPlayerBoatPayloadModel>());
