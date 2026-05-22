// ======================================
// CHALLENGE 1
// USER AUTHENTICATION
// ======================================

// Authentication promise
function authenticateUser() {
  return new Promise((resolve, reject) => {
    const authenticated = true;

    setTimeout(() => {
      if (authenticated) {
        resolve("User authenticated");
      } else {
        reject("Authentication failed");
      }
    }, 3000);
  });
}

// Handle promise
authenticateUser()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
