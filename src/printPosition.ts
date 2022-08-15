import { Rover } from "./model/rover";

export const printPosition = (rover: Rover) =>
  `${rover.x}:${rover.y}:${rover.facing}`;
