import { IPlayersState } from '../../players';
import { IBoatsState } from '../../boats';
import { IBoatShapeState } from '../../boats-shapes';

export interface CoreState {
  players: IPlayersState;
  boats: IBoatsState;
  boatShapes: IBoatShapeState;
}
