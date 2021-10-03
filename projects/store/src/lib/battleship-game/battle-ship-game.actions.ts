import { createAction, props } from '@ngrx/store';
import { SetGamePlayerTurnPayloadModel } from './models';

export const setPlayerTurn = createAction('[Battleship game] Set player turn', props<SetGamePlayerTurnPayloadModel>());
