import { sequences } from "./sequences.js";

export function checkIfThereIsWinner(boardState) {
  let winner = undefined;
  console.log("boardState", boardState);

  sequences.forEach((seq) => {
    const firstValue = boardState[seq[0][0]][seq[0][1]];
    const secondValue = boardState[seq[1][0]][seq[1][1]];
    const thirdValue = boardState[seq[2][0]][seq[2][1]];

    if (firstValue && firstValue === secondValue && firstValue === thirdValue) {
      if (!winner) winner = firstValue;
    }
  });

  return winner;
}
