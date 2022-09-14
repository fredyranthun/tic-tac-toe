export class GlobalState {
  constructor() {
    this.state = {
      board: [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
      ],
      turn: "x",
      winner: undefined,
    };
  }

  getState(key) {
    return this.state[key];
  }

  setState(key, value, config) {
    if (key === "board") {
      this.state[key][config.row][config.column] = value;
    }

    if (key === "turn") {
      this.state.turn = this.state.turn === "x" ? "o" : "x";
    }

    if (key === "winner") {
      this.state[key] = value;
    }
  }

  resetState() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.state.board[i][j] = undefined;
      }
    }

    this.state.turn = "x";
    this.state.winner = undefined;
  }
}
