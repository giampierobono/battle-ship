import { BoatPositionModel } from './boat-position.model';
import { BoatTypeEnum } from '../enums';

export interface BoatModel {
  playerIndex: number;
  boatIndex: number;
  shapeKey: BoatTypeEnum;
  hits: number;
  positions: BoatPositionModel;
}
