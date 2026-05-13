// ======================================
// INPUT EVENT EXAMPLE
// ======================================

// Select input element
const usernameInput = document.getElementById("username");

// Listen for typing
usernameInput.addEventListener("input", (event) => {
  // Get current input value
  const value = event.target.value;

  console.log("Current Value:", value);
});
