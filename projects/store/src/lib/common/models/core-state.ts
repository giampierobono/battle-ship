import { IPlayersState } from '../../players';
import { IBoatsState } from '../../boats';
import { IBoatShapeState } from '../../boats-shapes';
import { IGameSettingsState } from '../../game-settings';
import { IBattleShipGameState } from '../../battleship-game';

export interface CoreState {
  players: IPlayersState;
  boats: IBoatsState;
  boatShapes: IBoatShapeState;
  settings: IGameSettingsState;
  game: IBattleShipGameState;
}
