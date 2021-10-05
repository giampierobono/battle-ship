import {
  getAllBoatsPositionsForCurrentPlayer,
  getBattleShipGameState,
  getBoatForCurrentPlayer,
  getCurrentPlayerSunkBoats,
  getIsCurrentTurnOver,
  getIsGameOver,
  getPlayerMoves,
  getPlayersSunkBoats,
  getPlayerTurn,
  getSunkBoatPerPlayer,
  getTotalFiredShots,
} from '../battle-ship-game.selectors';
import { mockState } from '../../../mocks/store';

describe('Battleship game selectors', () => {
  describe('getBattleShipGameState', () => {
    it('should return game state', () => {
      expect(getBattleShipGameState(mockState)).toEqual(mockState.battleShipCore.game);
    });
  });

  describe('getPlayerTurn', () => {
    it('should return current player turn', () => {
      expect(getPlayerTurn(mockState)).toBe(1);
    });
  });

  describe('getPlayersSunkBoats', () => {
    it('should return sunm boats per player', () => {
      expect(getPlayersSunkBoats(mockState)).toMatchSnapshot();
    });
  });

  describe('getIsGameOver', () => {
    it('should return isGameOver property from state', () => {
      expect(getIsGameOver(mockState)).toBeFalsy();
    });
  });

  describe('getCurrentPlayerSunkBoats', () => {
    it('should return current player sunk boats property from state', () => {
      expect(getCurrentPlayerSunkBoats(mockState)).toMatchSnapshot();
    });
  });

  describe('getIsCurrentTurnOver', () => {
    it('should return isCurrentTurnOver property from state', () => {
      expect(getIsCurrentTurnOver(mockState)).toBeTruthy();
    });
  });

  describe('getPlayerMoves', () => {
    it('should return current player moves property from state', () => {
      expect(getPlayerMoves(mockState)).toMatchSnapshot();
    });
  });

  describe('getTotalFiredShots', () => {
    it('should return total fired shots sum', () => {
      expect(getTotalFiredShots(mockState)).toBe(10);
    });
  });

  describe('getSunkBoatPerPlayer', () => {
    it('should return sunk boats per player', () => {
      expect(getSunkBoatPerPlayer(mockState)).toMatchSnapshot();
    });
  });

  describe('getBoatForCurrentPlayer', () => {
    it('should return current player boats', () => {
      expect(getBoatForCurrentPlayer(mockState)).toMatchSnapshot();
    });
  });

  describe('getAllBoatsPositionsForCurrentPlayer', () => {
    it('should return all boats positions for current player', () => {
      expect(getAllBoatsPositionsForCurrentPlayer(mockState)).toMatchSnapshot();
    });
  });
});
