// ======================================
// ASYNC LOGIN APP
// ======================================

const button = document.getElementById("login-btn");

const status = document.getElementById("status");

function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Login Successful");
    }, 3000);
  });
}

async function handleLogin() {
  // Disable button
  button.disabled = true;

  status.innerText = "Logging in...";

  const result = await loginUser();

  status.innerText = result;

  // Enable button
  button.disabled = false;
}

button.addEventListener("click", handleLogin);
