// ======================================
// DOM ELEMENTS
// ======================================

const countElement = document.getElementById("count");

const increaseBtn = document.getElementById("increase");

const decreaseBtn = document.getElementById("decrease");

const resetBtn = document.getElementById("reset");

// ======================================
// STATE
// ======================================

let count = 0;

// ======================================
// UPDATE UI
// ======================================

function updateCount() {
  countElement.innerText = count;
}

// ======================================
// EVENTS
// ======================================

increaseBtn.addEventListener("click", () => {
  count++;
  updateCount();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCount();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCount();
});
