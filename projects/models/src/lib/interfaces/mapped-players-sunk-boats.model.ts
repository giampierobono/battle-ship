import { PlayersSunkBoatsModel } from './players-sunk-boats.model';

export interface MappedPlayersSunkBoatsModel {
  [playerIndex: number]: Array<PlayersSunkBoatsModel>;
}
