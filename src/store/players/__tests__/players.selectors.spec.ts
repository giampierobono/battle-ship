import { getCurrentGameNumberOfPlayers, getPlayers, getPlayerState } from '../players.selectors';
import { mockState } from '../../../mocks/store';

describe('Players selectors', () => {
  describe('getPlayerState', () => {
    it('should return players state', () => {
      expect(getPlayerState(mockState)).toEqual(mockState.battleShipCore.players);
    });
  });

  describe('getPlayers', () => {
    it('should return players', () => {
      expect(getPlayers(mockState)).toEqual(mockState.battleShipCore.players.players);
    });
  });

  describe('getCurrentGameNumberOfPlayers', () => {
    it('should return number of players', () => {
      expect(getCurrentGameNumberOfPlayers(mockState)).toBe(mockState.battleShipCore.players.players.length);
    });
  });
});
