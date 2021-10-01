import { BoatPositionModel } from './boat-position.model';
import { BoatShapeModel } from './boat-shape.model';

export interface BoatModel {
  boatIndex: number;
  shape: BoatShapeModel;
  isSunk: boolean;
  hits: number;
  positions: BoatPositionModel;
}
