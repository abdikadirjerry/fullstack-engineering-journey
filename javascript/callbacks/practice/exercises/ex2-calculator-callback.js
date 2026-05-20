// ======================================
// EXERCISE 2
// CALCULATOR CALLBACK
// ======================================

// Main function
function calculate(a, b, callback) {
  callback(a, b);
}

// Multiply callback
function multiply(x, y) {
  console.log(x * y);
}

// Execute callback
calculate(4, 5, multiply);
