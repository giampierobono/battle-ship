import { BoatType } from '../enums';
import { IBoatPosition } from './IBoatPosition';

export interface IBoat {
  shape: BoatType;
  isSunk: boolean;
  positions: IBoatPosition[];
}
