import { BoatModel } from 'models';
import { BoatPositionModel, BoatShapeModel, MappedBoatShapesModel } from 'models';
import { assocPath, has, isEmpty, keys } from 'ramda';
import { SegmentModel } from 'models';

const generateBoatShape = (shape: BoatShapeModel, boardSize: number): BoatPositionModel => {
  let boatPositions: BoatPositionModel = {};
  let startingRow: number | undefined = undefined;
  let startingColumn: number | undefined = undefined;
  let rowsOffsetFromStart: number | undefined = undefined;
  let colsOffsetFromStart: number | undefined = undefined;

  const init = (segment: SegmentModel) => {
    startingRow = Math.floor(Math.random() * (boardSize - segment.rowsCount));
    startingColumn = Math.floor(Math.random() * (boardSize - segment.colsCount));
    rowsOffsetFromStart = 0;
    colsOffsetFromStart = 0;
  };

  shape.segments.forEach((segment) => {
    if (!startingRow && !startingColumn && !rowsOffsetFromStart && !colsOffsetFromStart) {
      init(segment);
    }
    for (let i = 0; i < segment.rowsCount; i++) {
      for (let j = 0; j < segment.colsCount; j++) {
        boatPositions = assocPath(
          [`${startingRow! + rowsOffsetFromStart!}`, `${startingColumn! + colsOffsetFromStart!}`],
          false,
          boatPositions
        );
        colsOffsetFromStart!++;
      }
      colsOffsetFromStart = 0;
      rowsOffsetFromStart!++;
    }
  });
  rowsOffsetFromStart = 0;

  return boatPositions;
};

const arePositionsColliding = (boatPositions: BoatPositionModel, toCompare: BoatPositionModel): boolean =>
  keys(boatPositions).some(
    (row): boolean =>
      has(row.toString(), toCompare) &&
      keys(boatPositions[row]).some((column) => has(column.toString())(toCompare[row]))
  );

const checkCollisions = (boats: BoatModel[], positionsToCheck: BoatPositionModel, currentBoatIndex: number): boolean =>
  boats.some((boat) =>
    boat.boatIndex !== currentBoatIndex && !isEmpty(boat.positions)
      ? arePositionsColliding(boat.positions, positionsToCheck)
      : false
  );

export const generateBoatLocation = (boardSize: number, boats: BoatModel[], shapes: MappedBoatShapesModel) => {
  const clonedBoats = [...boats];

  clonedBoats.forEach((boat) => {
    do {
      boat.positions = generateBoatShape(shapes[boat.shapeKey], boardSize);
    } while (checkCollisions(boats, boat.positions, boat.boatIndex));
    console.log('final position', boat.positions);
  });
  return clonedBoats;
};
