import { Rover } from "./model/rover";
import { printPosition } from "./printPosition";
import { getActionOf } from "./actions/getActionOf";

export const execute = (command: string, rover: Rover): string => {
  const finalPosition = [...command].reduce(
    (rover, command) => getActionOf(command)(rover),
    rover
  );

  return printPosition(finalPosition);
};
