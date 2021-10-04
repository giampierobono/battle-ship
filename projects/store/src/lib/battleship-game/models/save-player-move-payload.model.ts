import { PositionStateEnum, ShotPositionModel } from 'models';

export interface SavePlayerMovePayloadModel {
  shotPosition: ShotPositionModel;
  state: PositionStateEnum;
}
