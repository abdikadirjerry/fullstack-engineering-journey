// ======================================
// PROMISE SUCCESS & FAILURE
// ======================================

// Create promise
const loginPromise = new Promise((resolve, reject) => {
  const isLoggedIn = true;

  if (isLoggedIn) {
    resolve("Login successful");
  } else {
    reject("Login failed");
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
