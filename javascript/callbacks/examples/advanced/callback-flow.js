// ======================================
// CALLBACK FLOW
// ======================================

function loginUser(callback) {
  console.log("Logging in user...");

  // Simulate delay
  setTimeout(() => {
    callback("Ahmed");
  }, 2000);
}

// Callback function
function loadDashboard(username) {
  console.log(`Welcome ${username}`);
}

// Execute flow
loginUser(loadDashboard);
