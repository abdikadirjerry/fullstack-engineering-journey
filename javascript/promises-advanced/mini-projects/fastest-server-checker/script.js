// ======================================
// FASTEST SERVER CHECKER
// ======================================

const button = document.getElementById("check-btn");

const status = document.getElementById("status");

function serverOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Server 1");
    }, 3000);
  });
}

function serverTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Server 2");
    }, 1000);
  });
}

button.addEventListener("click", () => {
  status.innerText = "Checking servers...";

  Promise.race([serverOne(), serverTwo()]).then((result) => {
    status.innerText = `${result} is fastest`;
  });
});
