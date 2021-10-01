import { PlayerModel } from './player.model';

export interface MappedPlayersModel {
  [playerIndex: number]: PlayerModel;
}
