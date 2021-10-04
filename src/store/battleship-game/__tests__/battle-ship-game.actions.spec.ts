import {
  addSunkBoat,
  nextTurn,
  savePlayerMove,
  setBoardPositionStatus,
  setPlayerTurn,
  setWinnerPlayer,
  tryShoot,
} from '../battle-ship-game.actions';
import { PositionStateEnum } from '../../../models';

describe('Battleship game actions', () => {
  describe('setPlayerTurn', () => {
    it('should return correct action structure', () => {
      expect(setPlayerTurn({ playerIndex: 1 })).toMatchSnapshot();
    });
  });

  describe('tryShoot', () => {
    it('should return correct action structure', () => {
      expect(tryShoot({ playerIndex: 0, row: 0, column: 0 })).toMatchSnapshot();
    });
  });

  describe('setBoardPositionStatus', () => {
    it('should return correct action structure', () => {
      expect(setBoardPositionStatus({ playerIndex: 0, row: 0, column: 0 })).toMatchSnapshot();
    });
  });

  describe('savePlayerMove', () => {
    it('should return correct action structure', () => {
      expect(
        savePlayerMove({ state: PositionStateEnum.HIT, shotPosition: { playerIndex: 1, row: 0, column: 0 } })
      ).toMatchSnapshot();
    });
  });

  describe('nextTurn', () => {
    it('should return correct action structure', () => {
      expect(nextTurn()).toMatchSnapshot();
    });
  });

  describe('addSunkBoat', () => {
    it('should return correct action structure', () => {
      expect(addSunkBoat({ boatIndex: 0, sunkByPlayerIndex: 0, boatBelongsToPlayerIndex: 1 })).toMatchSnapshot();
    });
  });

  describe('setWinnerPlayer', () => {
    it('should return correct action structure', () => {
      expect(setWinnerPlayer({ winnerPlayerIndex: 1 })).toMatchSnapshot();
    });
  });
});
