import { mockState } from '../../../mocks/store';
import { getBoardSize, getGameSettings, getMaxBoatsPerPlayer } from '../game-settings.selectors';

describe('Game settings selectors', () => {
  describe('getGameSettings', () => {
    it('should return game settings from store', () => {
      expect(getGameSettings(mockState)).toEqual(mockState.battleShipCore.settings);
    });
  });

  describe('getMaxBoatsPerPlayer', () => {
    it('should return max boats per player from store', () => {
      expect(getMaxBoatsPerPlayer(mockState)).toBe(4);
    });
  });

  describe('getBoardSize', () => {
    it('should return board size from store', () => {
      expect(getBoardSize(mockState)).toBe(8);
    });
  });
});
