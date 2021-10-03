import {
  BoatModel,
  BoatPositionModel,
  BoatShapeModel,
  BoatTypeEnum,
  MappedBoatShapesModel,
  PlayerModel,
  SegmentModel,
} from 'models';
import { assocPath, has, isEmpty, keys } from 'ramda';

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

const checkCollisions = (boats: BoatModel[], currentBoat: BoatModel): boolean =>
  boats.some((boat) =>
    boat.boatIndex !== currentBoat.boatIndex && boat.playerIndex === currentBoat.playerIndex && !isEmpty(boat.positions)
      ? arePositionsColliding(boat.positions, currentBoat.positions)
      : false
  );

const randomEnum = <T>(anEnum: T): T[keyof T] => {
  const enumValues = Object.keys(anEnum)
    .map((n) => Number.parseInt(n))
    .filter((n) => !Number.isNaN(n)) as unknown as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
};

const createDefaultPlayer = (playerIndex: number): PlayerModel => ({ playerIndex });

export const generateBoatLocation = (
  boardSize: number,
  playersBoats: Array<Array<BoatModel>>,
  shapes: MappedBoatShapesModel
) => {
  const clonedBoats = [...playersBoats];

  clonedBoats.forEach((playerBoats, playerIndex: number) => {
    playerBoats.forEach((playerBoat) => {
      do {
        playerBoat.positions = generateBoatShape(shapes[playerBoat.shapeKey], boardSize);
      } while (checkCollisions(clonedBoats[playerIndex], playerBoat));
    });
  });
  return clonedBoats;
};

const createDefaultBoat = (playerIndex: number, boatIndex: number): BoatModel => ({
  positions: {},
  playerIndex,
  boatIndex,
  shapeKey: randomEnum(BoatTypeEnum),
  hits: 0,
});

const createAllDefaultBoats = (players: PlayerModel[], maxBoatPerPlayer: number) =>
  players.reduce((acc, { playerIndex }) => {
    for (let i = 0; i < maxBoatPerPlayer; i++) {
      acc[playerIndex] = [...(acc[playerIndex] ? acc[playerIndex] : []), ...[createDefaultBoat(playerIndex, i)]];
    }
    return acc;
  }, [] as Array<Array<BoatModel>>);

export const createPlayers = (numberOfPlayers: number): PlayerModel[] => {
  const players: PlayerModel[] = [];
  for (let i = 0; i < numberOfPlayers; i++) {
    players.push(createDefaultPlayer(i));
  }
  return players;
};

export const createBoatsForAllPlayers = (
  players: PlayerModel[],
  maxBoatPerPlayer: number,
  boardSize: number,
  shapes: MappedBoatShapesModel
): Array<Array<BoatModel>> => generateBoatLocation(boardSize, createAllDefaultBoats(players, maxBoatPerPlayer), shapes);
