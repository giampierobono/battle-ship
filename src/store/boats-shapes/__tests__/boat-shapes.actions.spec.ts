import { addBoatShapes } from '../boat-shapes.actions';
import { mockBoatShapesArray } from '../../../mocks/game-objcts';

describe('Boat shapes actions', () => {
  describe('addBoatShapes', () => {
    it('should return correct action structure', () => {
      expect(addBoatShapes({ shapes: mockBoatShapesArray })).toMatchSnapshot();
    });
  });
});
