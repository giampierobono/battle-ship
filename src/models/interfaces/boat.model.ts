import { BoardPositionsModel } from './board-positions.model';
import { BoatTypeEnum } from '../enums';

export interface BoatModel {
  playerIndex: number;
  boatIndex: number;
  shapeKey: BoatTypeEnum;
  hits: number;
  positions: BoardPositionsModel;
}
