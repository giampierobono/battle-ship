import { addBoatsToPlayer, hitPlayerBoat } from '../boats.actions';

describe('Boats actions', () => {
  describe('addBoatsToPlayer', () => {
    it('should return correct action structure', () => {
      expect(
        addBoatsToPlayer({ boats: [[{ boatIndex: 0, playerIndex: 0, hits: 0, shapeKey: 2, positions: {} }]] })
      ).toMatchSnapshot();
    });
  });

  describe('hitPlayerBoat', () => {
    it('should return correct action structure', () => {
      expect(hitPlayerBoat({ position: { playerIndex: 0, row: 0, column: 0 }, boatIndex: 0 })).toMatchSnapshot();
    });
  });
});
