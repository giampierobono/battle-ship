import { createAction, props } from '@ngrx/store';
import { SavePlayerMovePayloadModel, SetGamePlayerTurnPayloadModel, SetWinnerPlayerPayloadModel } from './models';
import { ShotPositionModel, PlayersSunkBoatsModel } from 'models';

export const setPlayerTurn = createAction('[Battleship game] Set player turn', props<SetGamePlayerTurnPayloadModel>());

export const tryShoot = createAction('[Battleship game] Player fires a shot', props<ShotPositionModel>());

export const setBoardPositionStatus = createAction(
  '[Battleship game] Set board position status',
  props<ShotPositionModel>()
);

export const savePlayerMove = createAction('[Battleship game] Save player move', props<SavePlayerMovePayloadModel>());

export const nextTurn = createAction('[Battleship game] Move the next player');

export const addSunkBoat = createAction('[Battleship game] New sunk boat', props<PlayersSunkBoatsModel>());

export const setWinnerPlayer = createAction(
  '[Battleship game] Set winning player',
  props<SetWinnerPlayerPayloadModel>()
);
