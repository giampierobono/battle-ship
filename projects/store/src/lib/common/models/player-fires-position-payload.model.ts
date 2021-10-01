import { FireBoatPositionModel } from './fire-boat-position.model';

export interface PlayerFiresPositionPayloadModel {
  firingPlayerNumber: number;
  location: FireBoatPositionModel;
}
