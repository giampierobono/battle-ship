import { playersInitialState, playersReducer } from '../players.reducer';
import { addPlayers } from '../players.actions';

describe('Players reducer', () => {
  it('should return initial state on unknown action', () => {
    expect(playersReducer(playersInitialState, { type: 'UNKNOWN' })).toEqual(playersInitialState);
  });

  it('should add players to the state', () => {
    const newState = playersReducer(playersInitialState, addPlayers({ players: [{ playerIndex: 0 }] }));
    expect(newState.players).toEqual([{ playerIndex: 0 }]);
  });
});
