import { BoatModel } from '../models';

export const mockGameSettings = {
  boardSize: 8,
  boatsPerPlayer: 4,
  numOfPlayers: 2,
};

export const mockBoatShapesArray = [
  {
    shapeType: 2,
    shapeIndex: 0,
    segments: [
      {
        rowsCount: 1,
        colsCount: 4,
      },
    ],
    shapeSize: 4,
  },
  {
    shapeType: 1,
    shapeIndex: 0,
    segments: [
      {
        rowsCount: 2,
        colsCount: 2,
      },
    ],
    shapeSize: 4,
  },
  {
    shapeType: 0,
    shapeIndex: 0,
    segments: [
      {
        rowsCount: 2,
        colsCount: 1,
      },
      {
        rowsCount: 1,
        colsCount: 2,
      },
    ],
    shapeSize: 4,
  },
];

export const mockBoatShapes = {
  '0': {
    shapeType: 0,
    shapeIndex: 0,
    segments: [
      {
        rowsCount: 2,
        colsCount: 1,
      },
      {
        rowsCount: 1,
        colsCount: 2,
      },
    ],
    shapeSize: 4,
  },
  '1': {
    shapeType: 1,
    shapeIndex: 0,
    segments: [
      {
        rowsCount: 2,
        colsCount: 2,
      },
    ],
    shapeSize: 4,
  },
  '2': {
    shapeType: 2,
    shapeIndex: 0,
    segments: [
      {
        rowsCount: 1,
        colsCount: 4,
      },
    ],
    shapeSize: 4,
  },
};

export const mockAllBoats: Array<Array<BoatModel>> = [
  [
    {
      positions: {
        '2': {
          '5': 'BOAT',
        },
        '3': {
          '5': 'HIT',
        },
        '4': {
          '5': 'BOAT',
          '6': 'BOAT',
        },
      },
      playerIndex: 0,
      boatIndex: 0,
      shapeKey: 0,
      hits: 1,
    },
    {
      positions: {
        '0': {
          '6': 'BOAT',
        },
        '1': {
          '6': 'BOAT',
        },
        '2': {
          '6': 'BOAT',
          '7': 'BOAT',
        },
      } as any,
      playerIndex: 0,
      boatIndex: 1,
      shapeKey: 0,
      hits: 0,
    },
    {
      positions: {
        '0': {
          '1': 'BOAT',
          '2': 'BOAT',
        },
        '1': {
          '1': 'BOAT',
          '2': 'BOAT',
        },
      } as any,
      playerIndex: 0,
      boatIndex: 2,
      shapeKey: 1,
      hits: 0,
    },
    {
      positions: {
        '4': {
          '0': 'BOAT',
          '1': 'BOAT',
        },
        '5': {
          '0': 'BOAT',
          '1': 'BOAT',
        },
      } as any,
      playerIndex: 0,
      boatIndex: 3,
      shapeKey: 1,
      hits: 0,
    },
  ],
  [
    {
      positions: {
        '6': {
          '2': 'BOAT',
          '3': 'BOAT',
          '4': 'BOAT',
          '5': 'BOAT',
        },
      } as any,
      playerIndex: 1,
      boatIndex: 0,
      shapeKey: 2,
      hits: 0,
    },
    {
      positions: {
        '2': {
          '0': 'BOAT',
          '1': 'BOAT',
          '2': 'BOAT',
          '3': 'BOAT',
        },
      } as any,
      playerIndex: 1,
      boatIndex: 1,
      shapeKey: 2,
      hits: 0,
    },
    {
      positions: {
        '0': {
          '2': 'BOAT',
          '3': 'BOAT',
          '4': 'BOAT',
          '5': 'BOAT',
        },
      } as any,
      playerIndex: 1,
      boatIndex: 2,
      shapeKey: 2,
      hits: 0,
    },
    {
      positions: {
        '3': {
          '6': 'HIT',
        },
        '4': {
          '6': 'BOAT',
        },
        '5': {
          '6': 'BOAT',
          '7': 'BOAT',
        },
      } as any,
      playerIndex: 1,
      boatIndex: 3,
      shapeKey: 0,
      hits: 1,
    },
  ],
];
