// ======================================
// EXERCISE 3
// REJECT PROMISE
// ======================================

// Create promise
const loginPromise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve("Login successful");
  } else {
    reject("Invalid credentials");
  }
});

// Handle promise
loginPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
