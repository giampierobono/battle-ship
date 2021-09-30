import { IPlayer } from './IPlayer';

export interface IGame {
  players: IPlayer[];
  playerTurn: number;
  isGameOver: boolean;
  winnerPlayer: number;
}
