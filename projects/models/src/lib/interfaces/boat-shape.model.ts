import { BoatTypeEnum } from '../enums';
import { SegmentModel } from './segment.model';

export interface BoatShapeModel {
  shapeIndex: number;
  shapeType: BoatTypeEnum;
  shapeSize: number;
  segments: SegmentModel[];
}
