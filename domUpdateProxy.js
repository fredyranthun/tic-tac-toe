import { GlobalState } from "./globalState.js";

export const GlobalStateWithDomUpdate = new Proxy(GlobalState, {
  construct(target, args) {
    const instance = new target(...args);

    const turnElement = document.querySelector("[data-state=turn]");
    const winnerElement = document.querySelector("[data-state=winner]");
    const boardButtons = document.querySelectorAll(".board-button");

    turnElement.textContent = instance.getState("turn");

    return new Proxy(instance, {
      get(target, key, receiver) {
        if (key === "setState") {
          return function (key, value, config) {
            target.setState(key, value, config);

            if (key === "board") {
              const button = document.querySelector(
                `[data-row="${config.row + 1}"][data-column="${
                  config.column + 1
                }"]`
              );
              button.textContent = value;
            }

            if (key === "turn") {
              turnElement.textContent = target.getState("turn");
            }

            if (key === "winner") {
              winnerElement.textContent = "The winner is: " + value;
            }
          };
        }

        if (key === "resetState") {
          return function () {
            target.resetState();

            boardButtons.forEach((button) => {
              button.textContent = "";
            });

            turnElement.textContent = target.getState("turn");
            winnerElement.textContent = "";
          };
        }

        return Reflect.get(target, key, receiver);
      },
    });
  },
});
