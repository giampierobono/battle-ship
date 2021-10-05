import { boatShapesInitialState, boatShapesReducer } from '../boat-shapes.reducer';
import { setGameSettings } from '../../game-settings';
import { mockBoatShapes, mockBoatShapesArray } from '../../../mocks/game-objcts';

describe('Boat shapes reducer', () => {
  it('should return initial state on unknown action', () => {
    expect(boatShapesReducer(boatShapesInitialState, { type: 'UNKNOWN' })).toEqual(boatShapesInitialState);
  });

  it('should set boat shapes', () => {
    expect(
      boatShapesReducer(
        boatShapesInitialState,
        setGameSettings({ shapes: mockBoatShapesArray, boardSize: 8, boatsPerPlayer: 4, numOfPlayers: 2 })
      )
    ).toEqual({ shapes: mockBoatShapes });
  });
});
