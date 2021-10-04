import { createAction, props } from '@ngrx/store';
import { AddBoatsToPlayerPayload, HitPlayerBoatPayloadModel } from './models';

export const addBoatsToPlayer = createAction('[Boats] Add boat to player', props<AddBoatsToPlayerPayload>());

export const hitPlayerBoat = createAction('[Boats] Hit player boat', props<HitPlayerBoatPayloadModel>());
