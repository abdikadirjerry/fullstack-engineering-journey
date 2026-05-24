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
  status.innerText = "Logging in...";

  const result = await loginUser();

  status.innerText = result;
}

button.addEventListener("click", handleLogin);
