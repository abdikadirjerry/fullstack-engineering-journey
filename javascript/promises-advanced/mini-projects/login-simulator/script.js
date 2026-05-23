// ======================================
// LOGIN SIMULATOR
// ======================================

const button = document.getElementById("login-btn");

const status = document.getElementById("status");

function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Login successful");
    }, 3000);
  });
}

button.addEventListener("click", () => {
  status.innerText = "Logging in...";

  loginUser()
    .then((result) => {
      status.innerText = result;
    })
    .finally(() => {
      console.log("Login process finished");
    });
});
