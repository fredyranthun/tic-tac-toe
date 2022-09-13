export const state = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
];

export function getState(row, column) {
  return state[row][column];
}

export function setState(row, column, value) {
  return (state[row][column] = value);
}

export function resetState() {
  for (let line of state) {
    for (let value of line) {
      value = undefined;
    }
  }
}
