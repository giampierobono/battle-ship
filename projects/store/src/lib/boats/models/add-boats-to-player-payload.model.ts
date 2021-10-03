import { BoatModel } from 'models';

export interface AddBoatsToPlayerPayload {
  boats: Array<Array<BoatModel>>;
}
