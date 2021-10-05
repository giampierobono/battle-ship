import { getAllBoats, getBoatsState, getTotalNumberOfBoats } from '../boats.selectors';
import { mockState } from '../../../mocks/store';

describe('Boats selectors', () => {
  describe('getBoatsState', () => {
    it('should return boats state slice', () => {
      expect(getBoatsState(mockState)).toEqual(mockState.battleShipCore.boats);
    });
  });

  describe('getAllBoats', () => {
    it('should return all boats from the store', () => {
      expect(getAllBoats(mockState)).toEqual(mockState.battleShipCore.boats.boats);
    });
  });

  describe('getTotalNumberOfBoats', () => {
    it('should return total number of boats', () => {
      expect(getTotalNumberOfBoats(mockState)).toBe(8);
    });
  });
});
