import { GlobalStateWithDomUpdate } from "./domUpdateProxy.js";
import { checkIfThereIsWinner } from "./utils.js";

async function init() {
  const state = new GlobalStateWithDomUpdate();

  const boardButtons = document.querySelectorAll(".board-button");
  const resetButton = document.querySelector(".reset-button");

  resetButton.addEventListener("click", function () {
    state.resetState();
  });

  boardButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (state.getState("winner")) return;

      const row = button.dataset.row - 1;
      const column = button.dataset.column - 1;
      const turn = state.getState("turn");

      if (state.getState("board")[row][column]) return;

      state.setState("board", turn, { row, column });

      const winner = checkIfThereIsWinner(state.getState("board"));

      if (winner) {
        state.setState("winner", winner);
        return;
      }

      state.setState("turn");
    });
  });
}

init();
