// ======================================
// COUNTDOWN TIMER
// ======================================

// DOM elements
const countText = document.getElementById("count");

const button = document.getElementById("start-btn");

// Countdown value
let count = 5;

// Button event
button.addEventListener("click", () => {
  // Countdown interval
  const timer = setInterval(() => {
    count--;

    countText.innerText = count;

    // Stop timer
    if (count === 0) {
      clearInterval(timer);

      countText.innerText = "Done!";
    }
  }, 1000);
});
