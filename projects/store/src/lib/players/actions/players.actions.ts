import { createAction, props } from '@ngrx/store';
import { AddBoatToPlayerPayload, CreatePlayerPayloadModel, HitPlayerBoatPayloadModel } from '../models';

export const createPlayer = createAction('[Players] Add new player', props<CreatePlayerPayloadModel>());

export const addBoatToPlayer = createAction('[Players] Add boat to player', props<AddBoatToPlayerPayload>());

export const hitPlayerBoat = createAction('[Player] Hit player boat', props<HitPlayerBoatPayloadModel>());
