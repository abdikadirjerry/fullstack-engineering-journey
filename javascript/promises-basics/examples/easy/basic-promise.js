// ======================================
// BASIC PROMISE
// ======================================

// Create promise
const promise = new Promise((resolve) => {
  resolve("Promise resolved");
});

// Handle promise
promise.then((result) => {
  console.log(result);
});
