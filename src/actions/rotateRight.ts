import { getRightOf } from "../model/direction";
import { Rover } from "../model/rover";
import { Action } from "./getActionOf";

export const rotateRight: Action = (rover: Rover): Rover => ({
  ...rover,
  facing: getRightOf(rover.facing)
});
