// ======================================
// ASYNC LOGIN SIMULATOR
// ======================================

// DOM elements
const loginButton = document.getElementById("login-btn");

const statusText = document.getElementById("status");

// Login promise
function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Login successful");
    }, 3000);
  });
}

// Button event
loginButton.addEventListener("click", () => {
  statusText.innerText = "Logging in...";

  loginUser().then((result) => {
    statusText.innerText = result;
  });
});
