import { setState, getState, resetState } from "./state.js";
import { setTurn, getTurn } from "./turnState.js";
import { getActiveState, setActiveState } from "./activeState.js";
import {
  getWinner,
  isThereWinner,
  setWinner,
  checkIfThereIsAndUpdateWinner,
} from "./winnerState.js";

async function init() {
  const turnElement = document.querySelector("[data-turn=true]");
  const winnerElement = document.querySelector("[data-winner=true]");
  const boardButtons = document.querySelectorAll(".board-button");
  const resetButton = document.querySelector(".reset-button");

  turnElement.innerHTML = getTurn();

  resetButton.addEventListener("click", function () {
    setActiveState(true);
    setTurn("x");
    resetState();
    setWinner(undefined);
    console.log(getState(2, 2));
  });

  boardButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (getActiveState()) {
        let row = button.dataset.row - 1;
        let column = button.dataset.column - 1;

        if (getState(row, column) === undefined) {
          button.innerHTML = setState(row, column, getTurn());
          setTurn();
          checkIfThereIsAndUpdateWinner();

          if (isThereWinner()) {
            winnerElement.innerHTML = "The winner is: " + getWinner();
            getActiveState(false);
          } else {
            turnElement.innerHTML = getTurn();
          }
        }
      }
    });
  });
}

init();
