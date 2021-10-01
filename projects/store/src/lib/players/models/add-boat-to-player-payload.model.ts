import { BoatModel } from 'models';

export interface AddBoatToPlayerPayload {
  playerIndex: number;
  boat: BoatModel;
}
