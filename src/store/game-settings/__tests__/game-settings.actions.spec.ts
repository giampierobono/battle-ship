import { setGameSettings } from '../game-settings.actions';
import { mockBoatShapesArray } from '../../../mocks/game-objcts';

describe('Game settings actions', () => {
  describe('setGameSettings', () => {
    it('should return correct action structure', () => {
      expect(
        setGameSettings({ boatsPerPlayer: 4, boardSize: 8, shapes: mockBoatShapesArray, numOfPlayers: 4 })
      ).toMatchSnapshot();
    });
  });
});
