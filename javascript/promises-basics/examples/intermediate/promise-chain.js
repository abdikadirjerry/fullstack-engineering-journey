// ======================================
// PROMISE CHAIN
// ======================================

// Create promise
const taskPromise = new Promise((resolve) => {
  resolve(5);
});

// Promise chaining
taskPromise
  .then((number) => {
    return number * 2;
  })
  .then((result) => {
    console.log(result);
  });
