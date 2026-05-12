// ❓ Build counter with increment, decrement, and reset buttons.
let count = 0;
const display = document.querySelector("#count-display");

document.querySelector("#inc").addEventListener("click", () => {
  count++;
  display.innerText = count;
});

document.querySelector("#dec").addEventListener("click", () => {
  count--;
  display.innerText = count;
});

document.querySelector("#reset").addEventListener("click", () => {
  count = 0;
  display.innerText = count;
});
