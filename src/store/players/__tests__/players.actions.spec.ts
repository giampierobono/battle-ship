import { addPlayers } from '../players.actions';

describe('Players action', () => {
  describe('addPlayers', () => {
    it('should return correct action structure', () => {
      expect(addPlayers({ players: [] })).toMatchSnapshot();
    });
  });
});
