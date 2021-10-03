import { BoatShapeModel } from 'models';

export interface GameSettingsPayloadModel {
  numOfPlayers: number;
  boatsPerPlayer: number;
  boardSize: number;
  shapes: BoatShapeModel[];
}
