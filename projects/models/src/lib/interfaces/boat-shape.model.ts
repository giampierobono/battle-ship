import { BoatTypeEnum } from '../enums';

export interface BoatShapeModel {
  shapeIndex: number;
  shapeType: BoatTypeEnum;
  shapeSize: number;
  rowsNeeded: number;
  colsNeeded: number;
}
