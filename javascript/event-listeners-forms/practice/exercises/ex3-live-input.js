// ======================================
// EXERCISE 3\
// ❓ Prevent form refresh
// and print form values.
// LIVE INPUT DISPLAY
// ======================================

// Select elements
const input = document.getElementById("live-input");
const output = document.getElementById("output");

// Show live input value
input.addEventListener("input", (event) => {
  output.textContent = event.target.value;
});
