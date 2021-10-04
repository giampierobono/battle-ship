import { BoatTypeEnum } from '../enums';
import { BoatShapeModel } from './boat-shape.model';

export type MappedBoatShapesModel = {
  [type in BoatTypeEnum]: BoatShapeModel;
};
