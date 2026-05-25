// ======================================
// USER DATA LOADER
// ======================================

const button = document.getElementById("load-btn");

const status = document.getElementById("status");

function fetchUser() {
  return new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        resolve("Ahmed");
      } else {
        reject("Failed to load user");
      }
    }, 2000);
  });
}

async function loadUser() {
  status.innerText = "Loading User...";

  try {
    const user = await fetchUser();

    status.innerText = `Welcome ${user}`;
  } catch (error) {
    status.innerText = error;
  }
}

button.addEventListener("click", loadUser);
