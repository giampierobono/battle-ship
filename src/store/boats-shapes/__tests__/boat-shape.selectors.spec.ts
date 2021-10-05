import { getBoatShapes } from '../boat-shape.selectors';
import { mockState } from '../../../mocks/store';

describe('Boat shape selectors', () => {
  describe('getBoatShapes', () => {
    it('should return boat shapes from store', () => {
      expect(getBoatShapes(mockState)).toEqual(mockState.battleShipCore.boatShapes.shapes);
    });
  });
});
