// ======================================
// CHALLENGE 1
// LOGIN SYSTEM
// ======================================

function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ahmed");
    }, 2000);
  });
}

function loadProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Profile Loaded");
    }, 2000);
  });
}

async function startLogin() {
  const user = await loginUser();

  console.log(`Welcome ${user}`);

  const profile = await loadProfile();

  console.log(profile);
}

startLogin();
