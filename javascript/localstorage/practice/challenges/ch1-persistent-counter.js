// ======================================
// CHALLENGE 1
// PERSISTENT COUNTER WITH RESET
// ======================================

// Get saved count
let count = Number(localStorage.getItem("count")) || 0;

// DOM elements
const countElement = document.getElementById("count");

const increaseButton = document.getElementById("increase");

const resetButton = document.getElementById("reset");

// Render count
function renderCount() {
  countElement.innerText = count;
}

// Initial render
renderCount();

// Increase counter
increaseButton.addEventListener("click", () => {
  count++;

  localStorage.setItem("count", count);

  renderCount();
});

// Reset counter
resetButton.addEventListener("click", () => {
  count = 0;

  localStorage.setItem("count", count);

  renderCount();
});
