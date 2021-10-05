import { gameSettingsInitialState, gameSettingsReducer } from '../game-settings.reducer';
import { setGameSettings } from '../game-settings.actions';
import { GameSettingsPayloadModel } from '../models';
import { mockBoatShapesArray } from '../../../mocks/game-objcts';

describe('Game settings reducer', () => {
  it('should return initial state on unknown action', () => {
    expect(gameSettingsReducer(gameSettingsInitialState, { type: 'UNKNOWN' })).toEqual(gameSettingsInitialState);
  });

  it('should set game settings', () => {
    const gameSettings: GameSettingsPayloadModel = {
      boardSize: 8,
      numOfPlayers: 4,
      shapes: mockBoatShapesArray,
      boatsPerPlayer: 4,
    };
    const newState = gameSettingsReducer(gameSettingsInitialState, setGameSettings(gameSettings));
    expect(newState).toEqual({ boardSize: 8, numOfPlayers: 4, boatsPerPlayer: 4 });
  });
});
