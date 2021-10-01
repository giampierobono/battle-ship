import { BoatPositionModel } from './boat-position.model';

export interface BoatModel {
  playerIndex: number;
  boatIndex: number;
  shapeIndex: number;
  hits: number;
  positions: BoatPositionModel;
}
