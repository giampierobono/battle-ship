import { BoardPositionsModel } from './board-positions.model';

export interface MappedPlayersMovesModel {
  [playerIndex: number]: BoardPositionsModel;
}
