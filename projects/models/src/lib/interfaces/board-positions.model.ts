import { PositionStateEnum } from '../enums';

export interface BoardPositionsModel {
  [rowLetter: number]: { [columnNumber: number]: PositionStateEnum };
}
