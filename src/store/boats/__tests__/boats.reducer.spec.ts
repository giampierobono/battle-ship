import { boatsInitialState, boatsReducer } from '../boats.reducer';
import { addBoatsToPlayer, hitPlayerBoat } from '../boats.actions';
import { BoatModel, PositionStateEnum } from '../../../models';

describe('Boats reducer', () => {
  it('should return initial state for unknown action', () => {
    expect(boatsReducer(boatsInitialState, { type: 'UNKNOWN' })).toEqual(boatsInitialState);
  });

  it('should add boat to player', () => {
    const newState = boatsReducer(
      boatsInitialState,
      addBoatsToPlayer({ boats: [[{ playerIndex: 0, boatIndex: 0, shapeKey: 0, hits: 0, positions: {} }]] })
    );
    expect(newState.boats.length).toBe(1);
    expect(newState.boats).toMatchSnapshot();
  });

  it('should mark boat position as HIT and increase hits count', () => {
    const stateBoats: Array<Array<BoatModel>> = [
      [{ positions: { 0: { 0: PositionStateEnum.BOAT } }, boatIndex: 0, playerIndex: 0, hits: 1, shapeKey: 2 }],
    ];
    const newState = boatsReducer(
      { ...boatsInitialState, boats: stateBoats },
      hitPlayerBoat({ boatIndex: 0, position: { playerIndex: 0, column: 0, row: 0 } })
    );
    expect(newState.boats[0][0].positions[0][0]).toBeTruthy();
    expect(newState.boats[0][0].hits).toBe(2);
  });
});
