// ======================================
// EXERCISE 3
// HANDLE INPUT VALUE
// ======================================

// ❓ Task:
// Print user input dynamically
// while typing.

// ======================================
// HTML EXAMPLE
// ======================================

// <input id="username" />
// <p id="output"></p>

// ======================================
// SELECT ELEMENTS
// ======================================

const input = document.getElementById("username");

const output = document.getElementById("output");

// ======================================
// HANDLE INPUT EVENT
// ======================================

input.addEventListener("input", () => {
  // Get current value
  const currentValue = input.value;

  // Print to paragraph
  output.innerText = `You typed: ${currentValue}`;

  // Print to console
  console.log(currentValue);
});

// ======================================
// EXPECTED RESULT
// ======================================

// Output updates live while typing.
