export let turn = "x";

export function setTurn() {
  if (turn === "x") {
    turn = "o";
  } else {
    turn = "x";
  }
}

export function getTurn() {
  return turn;
}
