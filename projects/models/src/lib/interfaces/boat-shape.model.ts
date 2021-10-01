import { BoatTypeEnum } from '../enums';

export interface BoatShapeModel {
  shapeType: BoatTypeEnum;
  shapeSize: number;
  rowsNeeded: number;
  colsNeeded: number;
}
