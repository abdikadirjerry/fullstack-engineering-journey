// ======================================
// EXERCISE 2
// DELAY PROMISE
// ======================================

// Create promise
const delayedTask = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task completed after delay");
  }, 2000);
});

// Handle promise
delayedTask.then((result) => {
  console.log(result);
});
