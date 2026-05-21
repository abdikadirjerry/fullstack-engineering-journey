// ======================================
// DELAYED MESSAGE APP
// ======================================

// DOM elements
const button = document.getElementById("show-btn");

const message = document.getElementById("message");

// Button event
button.addEventListener("click", () => {
  // Show loading state
  message.innerText = "Waiting...";

  // Delay message
  setTimeout(() => {
    message.innerText = "Message displayed successfully";
  }, 3000);
});
