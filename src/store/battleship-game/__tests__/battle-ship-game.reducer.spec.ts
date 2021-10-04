import { battleShipGameInitialState, battleShipGameReducer } from '../battle-ship-game.reducer';
import { addSunkBoat, savePlayerMove, setPlayerTurn, setWinnerPlayer } from '../battle-ship-game.actions';
import { PositionStateEnum } from '../../../models';

describe('battleShipGameReducer', () => {
  it('should return current status on unknown action', () => {
    expect(battleShipGameReducer(battleShipGameInitialState, { type: 'UNKNOWN' })).toEqual(battleShipGameInitialState);
  });

  it('should set player turn to initial state', () => {
    const newState = battleShipGameReducer(battleShipGameInitialState, setPlayerTurn({ playerIndex: 1 }));
    expect(newState.playerTurn).toBe(1);
  });

  it('should save player move and set turn over', () => {
    const newState = battleShipGameReducer(
      battleShipGameInitialState,
      savePlayerMove({ state: PositionStateEnum.HIT, shotPosition: { playerIndex: 0, row: 0, column: 0 } })
    );
    expect(newState.playersMoves[0][0][0]).toBe(PositionStateEnum.HIT);
    expect(newState.isCurrentTurnOver).toBeTruthy();
  });

  it('should add sunk boat to player 1', () => {
    const newState = battleShipGameReducer(
      battleShipGameInitialState,
      addSunkBoat({ boatIndex: 0, boatBelongsToPlayerIndex: 0, sunkByPlayerIndex: 1 })
    );
    expect(newState.playersSunkBoats[1].length).toBe(1);
    expect(newState.playersSunkBoats[1]).toMatchSnapshot();
  });

  it('should set winner player', () => {
    const newState = battleShipGameReducer(battleShipGameInitialState, setWinnerPlayer({ winnerPlayerIndex: 1 }));
    expect(newState.winnerPlayer).toBe(1);
  });
});
