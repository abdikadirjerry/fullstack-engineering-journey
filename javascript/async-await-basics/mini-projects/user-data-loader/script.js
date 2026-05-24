// ======================================
// USER DATA LOADER
// ======================================

const button = document.getElementById("load-btn");

const status = document.getElementById("status");

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ahmed");
    }, 2000);
  });
}

async function loadUser() {
  status.innerText = "Loading User...";

  const user = await fetchUser();

  status.innerText = `Welcome ${user}`;
}

button.addEventListener("click", loadUser);
