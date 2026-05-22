// ======================================
// DELAYED MESSAGE PROMISE APP
// ======================================

// DOM elements
const button = document.getElementById("show-btn");

const message = document.getElementById("message");

// Create promise
function showDelayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Message displayed successfully");
    }, 3000);
  });
}

// Button event
button.addEventListener("click", () => {
  message.innerText = "Loading...";

  showDelayedMessage().then((result) => {
    message.innerText = result;
  });
});
