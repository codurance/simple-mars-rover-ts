import { getLeftOf } from "../model/direction";
import { Rover } from "../model/rover";
import { Action } from "./getActionOf";

export const rotateLeft: Action = (rover: Rover): Rover => ({
  ...rover,
  facing: getLeftOf(rover.facing)
});
