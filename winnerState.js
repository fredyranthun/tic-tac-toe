import { sequences } from "./sequences.js";
import { getState } from "./state.js";

let winner = undefined;

export function getWinner() {
  return winner;
}

export function isThereWinner() {
  return winner !== undefined;
}

export function setWinner(value) {
  return (winner = value);
}

export function checkIfThereIsAndUpdateWinner() {
  sequences.forEach((seq) => {
    const firstValue = getState(seq[0][0], seq[0][1]);
    const secondValue = getState(seq[1][0], seq[1][1]);
    const thirdValue = getState(seq[2][0], seq[2][1]);

    if (firstValue && firstValue === secondValue && firstValue === thirdValue) {
      if (!isThereWinner()) setWinner(firstValue);
    }
  });
}
