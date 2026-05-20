// ======================================
// BASIC CALLBACK
// ======================================

// Greeting function
function greet(name) {
  console.log(`Hello ${name}`);
}

// Main function
function processUser(callback) {
  // Execute callback
  callback("Fatima");
}

// Pass callback function
processUser(greet);
