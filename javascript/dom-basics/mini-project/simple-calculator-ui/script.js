// ================================
// DOM ELEMENTS
// ================================

// Calculator display input
const display = document.getElementById("display");

// All calculator buttons
const buttons = document.querySelectorAll("button");

// ================================
// UPDATE DISPLAY
// ================================

// Add value to display
function appendToDisplay(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Calculate result
function calculateResult() {
  try {
    // Evaluate math expression
    const result = eval(display.value);

    // Prevent undefined or invalid result
    if (result === undefined || Number.isNaN(result)) {
      display.value = "Error";
      return;
    }

    display.value = result;
  } catch (error) {
    // Handle invalid expressions
    display.value = "Error";
  }
}

// ================================
// BUTTON EVENTS
// ================================

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    // Clear button
    if (value === "C") {
      clearDisplay();
      return;
    }

    // Equal button
    if (value === "=") {
      calculateResult();
      return;
    }

    // Append clicked value
    appendToDisplay(value);
  });
});

// ================================
// KEYBOARD SUPPORT
// ================================

document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Allowed keys
  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
    "(",
    ")",
  ];

  // Add numbers/operators
  if (allowedKeys.includes(key)) {
    appendToDisplay(key);
  }

  // Enter key
  if (key === "Enter") {
    calculateResult();
  }

  // Backspace key
  if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  // Escape key
  if (key === "Escape") {
    clearDisplay();
  }
});
