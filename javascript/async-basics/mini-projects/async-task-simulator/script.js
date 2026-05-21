// ======================================
// ASYNC TASK SIMULATOR
// ======================================

// DOM elements
const startButton = document.getElementById("start-btn");

const statusText = document.getElementById("status");

// Button event
startButton.addEventListener("click", () => {
  // Loading state
  statusText.innerText = "Processing task...";

  // Simulate async task
  setTimeout(() => {
    statusText.innerText = "Task completed successfully";
  }, 4000);
});
