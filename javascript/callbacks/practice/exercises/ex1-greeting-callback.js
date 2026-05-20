// ======================================
// EXERCISE 1
// GREETING CALLBACK
// ======================================

// Greeting function
function greetUser(name) {
  console.log(`Hello ${name}`);
}

// Main function
function process(callback) {
  callback("Ali");
}

// Execute callback
process(greetUser);
