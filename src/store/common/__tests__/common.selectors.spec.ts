import { getCoreStateFeatureSelector } from '../common.selectors';
import { mockState } from '../../../mocks/store';

describe('Common selectors', () => {
  it('should return core state root', () => {
    expect(getCoreStateFeatureSelector(mockState)).toEqual(mockState.battleShipCore);
  });
});
