// ======================================
// EXERCISE 1
// HANDLE ERROR
// ======================================

const loginPromise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve("Login successful");
  } else {
    reject("Invalid credentials");
  }
});

loginPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
