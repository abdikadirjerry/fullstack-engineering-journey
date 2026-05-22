// ======================================
// EXERCISE 1
// BASIC PROMISE
// ======================================

// Create promise
const promise = new Promise((resolve) => {
  resolve("Exercise completed");
});

// Handle promise
promise.then((message) => {
  console.log(message);
});
