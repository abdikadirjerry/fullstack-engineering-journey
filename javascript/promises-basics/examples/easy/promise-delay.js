// ======================================
// PROMISE WITH DELAY
// ======================================

// Create promise
const delayedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Executed after 2 seconds");
  }, 2000);
});

// Handle promise
delayedPromise.then((message) => {
  console.log(message);
});
