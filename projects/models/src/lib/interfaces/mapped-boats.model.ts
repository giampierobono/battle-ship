import { BoatModel } from './boat.model';

export interface MappedBoatsModel {
  [boatIndex: number]: BoatModel;
}
