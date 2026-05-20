// ======================================
// DELAYED GREETING APP
// ======================================

// DOM elements
const button = document.getElementById("greet-btn");

const message = document.getElementById("message");

// Greeting function
function delayedGreeting(callback) {
  setTimeout(() => {
    callback("Welcome Ahmed");
  }, 2000);
}

// Display callback
function showMessage(text) {
  message.innerText = text;
}

// Button event
button.addEventListener("click", () => {
  delayedGreeting(showMessage);
});
