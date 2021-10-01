import { FireBoatPositionModel } from '../../common/models';

export interface HitPlayerBoatPayloadModel {
  hitBoatIndex: number;
  hitPlayerIndex: number;
  position: FireBoatPositionModel;
}
