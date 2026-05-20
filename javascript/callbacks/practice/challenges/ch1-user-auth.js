// ======================================
// CHALLENGE 1
// USER AUTH CALLBACK
// ======================================

// Login function
function login(callback) {
  console.log("Authenticating...");

  setTimeout(() => {
    callback("Ahmed");
  }, 2000);
}

// Dashboard callback
function showDashboard(username) {
  console.log(`Welcome ${username}`);
}

// Execute login
login(showDashboard);
