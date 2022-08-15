import { execute } from "../src/execute";
import { Direction } from "../src/model/direction";

describe("Execute", () => {
  const initialRover = {
    x: 0,
    y: 0,
    facing: Direction.North
  };

  it.each`
    command           | expectedOutput
    ${"R"}            | ${"0:0:E"}
    ${"RR"}           | ${"0:0:S"}
    ${"RRR"}          | ${"0:0:W"}
    ${"RRRR"}         | ${"0:0:N"}
    ${"RRRRR"}        | ${"0:0:E"}
    ${"L"}            | ${"0:0:W"}
    ${"LL"}           | ${"0:0:S"}
    ${"LLL"}          | ${"0:0:E"}
    ${"LLLL"}         | ${"0:0:N"}
    ${"LLLLL"}        | ${"0:0:W"}
    ${"M"}            | ${"0:1:N"}
    ${"MM"}           | ${"0:2:N"}
    ${"MMM"}          | ${"0:3:N"}
    ${"MMMRM"}        | ${"1:3:E"}
    ${"RMM"}          | ${"2:0:E"}
    ${"MMRMRM"}       | ${"1:1:S"}
    ${"MMRMRRM"}      | ${"0:2:W"}
    ${"MMMMMMMMMMM"}  | ${"0:0:N"}
    ${"RMMMMMMMMMMM"} | ${"0:0:E"}
    ${"LM"}           | ${"10:0:W"}
    ${"LLM"}          | ${"0:10:S"}
  `(
    "should return $expectedOutput if input is '$command'",
    ({ command, expectedOutput }) => {
      const output = execute(command, initialRover);
      expect(output).toBe(expectedOutput);
    }
  );
});
