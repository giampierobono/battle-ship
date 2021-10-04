import { BoatTypeEnum } from '../../../../models';

export const boatShapes = [
  {
    shapeType: BoatTypeEnum.TWO_LINES,
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
    shapeType: BoatTypeEnum.BOX,
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
    shapeType: BoatTypeEnum.L_SHAPE,
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
