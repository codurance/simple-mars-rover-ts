export enum Direction {
  North = "N",
  East = "E",
  South = "S",
  West = "W"
}

export const getRightOf = (direction: Direction) => {
  const rights = new Map<Direction, Direction>([
    [Direction.North, Direction.East],
    [Direction.East, Direction.South],
    [Direction.South, Direction.West],
    [Direction.West, Direction.North]
  ]);

  return rights.get(direction) as Direction;
};

export const getLeftOf = (direction: Direction) => {
  const lefts = new Map<Direction, Direction>([
    [Direction.North, Direction.West],
    [Direction.West, Direction.South],
    [Direction.South, Direction.East],
    [Direction.East, Direction.North]
  ]);

  return lefts.get(direction) as Direction;
};
